import { ArrowLeft, Users, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ProgramCategoryProps {
  category: string;
  title: string;
  problems: string[];
  methodology: string[];
  solutions: string[];
}

const ProgramCategory = ({
  category,
  title,
  problems,
  methodology,
  solutions
}: ProgramCategoryProps) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour obtenir la clé de traduction
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

  const categoryKey = getTranslationKey(category);

  // Utiliser les données du JSON si disponibles, sinon utiliser les traductions i18n
  const displayProblems = problems && problems.length > 0 ?
    problems :
    (t(`programmes.${categoryKey}.problemes`, { returnObjects: true, defaultValue: [] }) as string[] || []);

  const displayMethodology = methodology && methodology.length > 0 ?
    methodology :
    (t(`programmes.${categoryKey}.methodes`, { returnObjects: true, defaultValue: [] }) as string[] || []);

  const displaySolutions = solutions && solutions.length > 0 ?
    solutions :
    (t(`programmes.${categoryKey}.solutions`, { returnObjects: true, defaultValue: [] }) as string[] || []);

  // Vérifier si nous avons des données à afficher
  const hasData = displayProblems.length > 0 || displayMethodology.length > 0 || displaySolutions.length > 0;

  if (!hasData) {
    return (
      <div className="w-full p-8 text-center">
        <p className="text-red-600">
          {t('programCategory.error.noData', 'Données non disponibles pour cette catégorie.')}
        </p>
        <Link to="/">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.backToPrograms', 'Retour aux programmes')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        <div className="grid gap-5 md:gap-8">
          {/* Problems Section */}
          {displayProblems.length > 0 && (
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-background">
              <CardHeader className="max-md:px-4">
                <CardTitle className="flex text-lg md:text-xl items-center gap-3 text-red-700">
                  <Users className="w-6 h-6" />
                  {t('programmes.sections.problemes', 'Problèmes identifiés')}
                </CardTitle>
                <CardDescription>
                  {t('programmes.descriptions.problemes', 'Les défis spécifiques auxquels font face les {{category}}', {
                    category: title.toLowerCase()
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="max-md:px-4">
                <div className="grid gap-4">
                  {displayProblems.map((problem, index) => (
                    <div key={index} className="gap-3 p-4 inline-flex bg-white/50 rounded-lg border border-red-100">
                      <div className="shrink-0 w-6 h-6 bg-red-100 rounded-full inline-flex align-middle items-center justify-center text-red-600 font-semibold text-xs md:text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-[.85rem] md:text-[.9rem]">{problem}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Methodology Section */}
          {displayMethodology.length > 0 && (
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-background">
              <CardHeader className="max-md:px-4">
                <CardTitle className="flex text-lg md:text-xl items-center gap-3 text-blue-700">
                  <Target className="w-5 h-5 md:w-6 md:h-6" />
                  {t('programmes.sections.methodes', 'Méthodologie d\'intervention')}
                </CardTitle>
                <CardDescription>
                  {t('programmes.descriptions.methodes', 'Notre approche structurée pour apporter des solutions durables')}
                </CardDescription>
              </CardHeader>
              <CardContent className="max-md:px-4">
                <div className="grid gap-4">
                  {displayMethodology.map((method, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/50 rounded-lg border border-blue-100">
                      <div className="shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs md:text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 text-[.85rem] md:text-[.9rem]">{method}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Solutions Section */}
          {displaySolutions.length > 0 && (
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-background">
              <CardHeader className="max-md:px-4">
                <CardTitle className="flex text-lg md:text-xl items-center gap-3 text-green-700">
                  <Lightbulb className="w-6 h-6" />
                  {t('programmes.sections.solutions', 'Solutions proposées')}
                </CardTitle>
                <CardDescription>
                  {t('programmes.descriptions.solutions', 'Nos propositions concrètes pour améliorer la situation des {{category}}', {
                    category: title.toLowerCase()
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="max-md:px-4">
                <div className="grid gap-4">
                  {displaySolutions.map((solution, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-white/50 rounded-lg border border-green-100">
                      <div className="shrink-0 w-6 h-6 flex bg-green-100 rounded-full items-center justify-center text-green-600 font-semibold text-xs md:text-sm">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 inline align-middle text-[.85rem] md:text-[.9rem]">{solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgramCategory;