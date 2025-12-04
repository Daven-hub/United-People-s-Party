import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Search, ChevronRight, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import programe from "@/datas/programme.json";
import ComminSoonModal from "./modal/ComminSoonModal";
import RejoindreModal from "./RejoindreModal";
import LanguageSwitcher from "./locales/LanguageSwitcher";

const safeSlugify = (text: any): string => {
  if (typeof text !== 'string') {
    text = String(text);
  }

  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

const getTranslationKey = (frenchCategory: string): string => {
  const mapping: Record<string, string> = {
    'Élèves': 'eleves',
    'Élève': 'eleves',
    'Etudiants': 'etudiants',
    'Étudiants': 'etudiants',
    'Étudiant': 'etudiants',
    'Etudiant': 'etudiants',
    'Commerçants': 'commercants',
    'Commerçant': 'commercants',
    'Salariés': 'salaries',
    'Salarié': 'salaries',
    'Travailleurs de métiers spécialisés': 'travailleurs_metiers',
    'Travailleur de métier spécialisé': 'travailleurs_metiers',
    'Orphelins': 'orphelins',
    'Orphelin': 'orphelins',
    'Jeunes filles mères': 'jeunes_filles_meres',
    'Jeune fille mère': 'jeunes_filles_meres',
    'Veuves': 'veuves',
    'Veuve': 'veuves',
    'Diaspora Camerounaise': 'diaspora',
    'Diapora Camerounaise': 'diaspora',
    'Personnes âgées': 'personnes_agees',
    'Personne âgée': 'personnes_agees',
    'Prisonniers': 'prisonniers',
    'Prisonnier': 'prisonniers',
    'FMO': 'fmo',
    'Fonctionnaires': 'fonctionnaires',
    'Fonctionnaire': 'fonctionnaires',
    'Entrepreneurs': 'entrepreneurs',
    'Entrepreneur': 'entrepreneurs',
    'Communautés digitales': 'communautes_digitales',
    'Communauté digitale': 'communautes_digitales'
  };

  // Essayer d'abord le mapping direct
  if (mapping[frenchCategory]) {
    return mapping[frenchCategory];
  }

  // Recherche insensible à la casse et aux accents
  const normalizedInput = frenchCategory
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  for (const [key, value] of Object.entries(mapping)) {
    const normalizedKey = key
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    if (normalizedInput.includes(normalizedKey) || normalizedKey.includes(normalizedInput)) {
      return value;
    }
  }

  // Fallback : nettoyage simple
  return frenchCategory
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ /g, '_')
    .replace(/[^\w_]/g, '');
};

const Navigation = () => {
  const { t } = useTranslation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoomin, setIsCoomin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  const getProgramCategories = () => {
    const categories = programe.map((item, index) => {
      const translationKey = getTranslationKey(item.categ);
      const translatedLabel = t(`programmes.categories.${translationKey}`, { defaultValue: item.categ });

      return {
        id: index,
        categ: item.categ,
        slug: safeSlugify(item.categ),
        translatedLabel: translatedLabel
      };
    });

    return categories;
  };

  const pdfOptions = [
    { label: t("documents.programme", "Programme Politique"), href: "/doc/PROGRAMME.pdf" },
    { label: t("documents.statut", "Statut"), href: "/doc/Statut.pdf" },
    { label: t("documents.reglement", "Règlement Intérieur"), href: "/doc/Statut.pdf" }
  ];

  const programCategories = getProgramCategories();

  const mainNavItems = [
    { label: t("nav.accueil", "Accueil"), href: "/", child: [], modal: false },
    { label: t("nav.about", "Qui sommes-nous ?"), href: "/qui-sommes-nous-?", child: [], modal: false },
    {
      label: t("nav.programme", "Programme politique"),
      href: "#",
      child: programCategories,
      modal: false
    },
    { label: t("nav.documents", "Documents"), href: "#", child: pdfOptions, modal: false, isPdf: true },
    { label: t("nav.projet", "Projet politique"), href: "/projets-politique", child: [], modal: false },
    { label: t("nav.vision", "Vision politique"), href: "/vision-politique", child: [], modal: false },
    { label: t("nav.galerie", "Galerie"), href: "/galerie", child: [], modal: false },
    { label: t("nav.actualites", "Actualités"), href: "/actualites", child: [], modal: true },
    { label: t("nav.contact", "Contact"), href: "/contact", child: [], modal: false },
  ];

  const toggleItemExpansion = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="z-50 bg-background shadow-lg" ref={menuRef}>
      <div className="hidden lg:block bg-muted/30 border-b border-gray-100">
        <div className="w-full px-[6.5%]">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-5 text-[.75rem]">
              <LanguageSwitcher />
            </div>
            <div className="flex items-center gap-2">
              <Input
                type="search"
                placeholder={t("search", "Rechercher...")}
                className="w-64 h-8 text-sm bg-background"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="w-full px-[4.5%]">
          <div className="flex items-center justify-between py-2.5">
            <a href="/">
              <img
                src={"/UPP.png"}
                alt="ANG Logo"
                className="w-[55px] h-[55px] md:w-[170px] md:h-[115px] object-contain"
              />
            </a>
            <img
              src={"/embleme.png"}
              alt="CNG Logo"
              className="w-[55px] h-[55px] md:w-[115px] md:h-[115px] object-contain"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-0 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-primary">
        <div className="w-full px-[4.5%]">
          <nav className="hidden relative lg:flex items-center">
            {mainNavItems.map((item) => (
              !item.modal ?
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center uppercase text-[.73rem] group gap-1 px-6 py-4 text-primary-foreground hover:bg-secondary hover:text-primary transition-colors font-medium"
                >
                  {item.label} {item.child.length > 0 && <ChevronRight size={16} />}
                  {item.child.length > 0 && (
                    <ul className="absolute text-[.9rem] hidden group-hover:grid p-10 top-full grid-cols-4 gap-5 left-0 text-white z-10 w-full h-fit bg-secondary">
                      {item.child.map((x: any, inde) =>
                        item.isPdf ?
                          <li key={inde}>
                            <a
                              className="flex capitalize hover:text-destructive px-1 py-1 items-center gap-1 text-primary"
                              href={x.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ChevronsRight size={16} />{x.label}
                            </a>
                          </li>
                          :
                          <li key={inde}>
                            <a
                              className="flex capitalize hover:text-destructive px-1 py-1 items-center gap-1 text-primary"
                              href={`/programme/${x.slug}`}
                            >
                              <ChevronsRight size={16} />{x.translatedLabel}
                            </a>
                          </li>
                      )}
                    </ul>
                  )}
                </a> :
                <div
                  onClick={() => setIsCoomin(true)}
                  className="flex cursor-pointer uppercase items-center text-[.73rem] group gap-1 px-6 py-4 text-primary-foreground hover:bg-primary-light transition-colors font-medium"
                >
                  {item.label}
                </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="border-primary-foreground hover:bg-primary-foreground ml-auto"
              asChild
            >
              <button onClick={() => setIsModalOpen(true)} className="ml-auto w-[10%] border border-none flex items-center justify-center uppercase text-[.72rem] gap-1 px-5 py-3 bg-secondary hover:bg-primary-light text-primary transition-colors font-bold">
                {t("nav.rejoindre", "Nous rejoindre")}
              </button>
            </Button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-background shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-border">
          <div className="">
            <LanguageSwitcher />
          </div>
          <div></div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="h-full overflow-y-auto pb-20">
          <div className="px-4 py-4 space-y-1">
            {mainNavItems.map((item, index) => (
              <div key={item.label} className="border-b border-border last:border-b-0">
                {!item.modal ? (
                  item.child.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleItemExpansion(index)}
                        className="flex justify-between items-center w-full text-left text-sm capitalize text-foreground hover:text-primary transition-colors font-medium py-3"
                      >
                        <span>{item.label}</span>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${expandedItems.includes(index) ? 'rotate-90' : ''}`}
                        />
                      </button>
                      {expandedItems.includes(index) && (
                        <div className="pl-4 pb-2">
                          {item.child.map((x: any, inde) => (
                            item.isPdf ?
                              <a
                                key={inde}
                                href={x.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {x.label}
                              </a>
                              :
                              <a
                                key={inde}
                                href={`/programme/${x.slug}`}
                                className="block text-sm text-muted-foreground hover:text-primary py-2 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {x.translatedLabel}
                              </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-sm capitalize text-foreground hover:text-primary transition-colors font-medium py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                ) : (
                  <button
                    onClick={() => { setIsMenuOpen(false); setIsCoomin(true); }}
                    className="block w-full text-left text-sm capitalize text-foreground hover:text-primary transition-colors font-medium py-3"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            <div className="pt-6 mt-4 border-t border-border">
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                variant="outline"
                size="sm"
                className="w-full"
              >
                {t("nav.rejoindre", "Nous rejoindre")}
              </Button>
            </div>

            {/* Search in mobile menu */}
            <div className="pt-4 mt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Input
                  type="search"
                  placeholder={t("search", "Rechercher...")}
                  className="flex-1 h-9 text-sm bg-muted"
                />
                <Button size="sm" className="h-9 px-3">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RejoindreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ComminSoonModal isOpen={isCoomin} onClose={() => setIsCoomin(false)} />
    </div>
  );
};

export default Navigation;