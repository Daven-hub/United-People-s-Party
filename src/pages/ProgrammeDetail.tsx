import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import programe from "@/datas/programme.json"
import ProgramCategory from '@/components/programCategory'
import { Filter } from 'lucide-react'
import $ from "jquery"
import RejoindreModal from '@/components/RejoindreModal'
import { useTranslation } from 'react-i18next'

export function slugify(text: string) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

function ProgrammeDetail() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const { t } = useTranslation();

    const detail = programe.find((x) => slugify(x.categ) === id);

    // Fonction améliorée pour obtenir la clé de traduction
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

    const closeMobil = () => {
        $(".mobshow").addClass("max-md:hidden");
    };

    const activeFilter = () => {
        $(".mobshow").toggleClass("max-md:hidden");
    };

    if (!detail) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <div className="flex-1 flex items-center justify-center p-8">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            {t('common.notFound', 'Catégorie non trouvée')}
                        </h1>
                        <p className="text-gray-600 mb-6">
                            {t('common.categoryNotFound', 'La catégorie de programme que vous cherchez n\'existe pas.')}
                        </p>
                        <Link
                            to="/"
                            className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
                        >
                            {t('common.backToPrograms', 'Retour aux programmes')}
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Obtenir le titre traduit pour la catégorie actuelle
    const translationKey = getTranslationKey(detail.categ);
    const translatedTitle = t(`programmes.categories.${translationKey}`, { defaultValue: detail.categ });

    return (
        <>
            <Navigation />
            <div className='relative px-[6.5%] py-14'>
                <div className="absolute w-full h-full aspect-video inset-0">
                    <img
                        src={"/hero.jpg"}
                        alt={"hero"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-destructive/15 to-secondary/20" />
                    <div className="absolute inset-0 bg-black/50 md:bg-black/25" />
                </div>
                <h2 className='text-[1.65rem] md:text-[2.6rem] relative capitalize font-bold text-white'>
                    {translatedTitle}
                </h2>
                <Breadcrumbs />
            </div>

            <div className='py-14 max-md:pb-10 max-md:pt-10 flex max-md:flex-col gap-2 px-[6.5%]'>
                {/* Sidebar des catégories */}
                <div className='w-full relative md:w-[23%] md:sticky md:top-[20px] h-fit flex flex-col gap-2.5 pr-0 md:pr-6 md:border-r-2 border-black/60 border-dashed'>
                    <div className='flex max-md:border-b-2 max-md:py-2 max-md:border-dotted border-primary max-md:sticky max-md:top-[20px] items-center justify-between max-md:mb-2.5 gap-3'>
                        <h1 className='text-[1.4rem] md:text-[1.6rem] font-semibold'>
                            {t('programCategories.title', 'Catégories')}
                        </h1>
                        <div
                            onClick={() => activeFilter()}
                            className='bg-muted-foreground btn-filter cursor-pointer p-2 rounded-[5px] md:hidden flex items-center justify-center'
                        >
                            <Filter size={18} className='text-primary' />
                        </div>
                    </div>

                    <ul className='md:flex max-md:shadow-lg max-md:shadow-primary/20 max-md:h-[300px] max-md:py-1.5 max-md:rounded-[5px] max-md:absolute max-md:w-full max-md:top-[85%] max-md:overflow-y-auto max-md:bg-white menu-program flex-col mobshow max-md:hidden'>
                        {programe.map((x, ind) => {
                            const categoryKey = getTranslationKey(x.categ);
                            const translatedLabel = t(`programmes.categories.${categoryKey}`, { defaultValue: x.categ });

                            return (
                                <li key={ind}>
                                    <NavLink
                                        onClick={() => closeMobil()}
                                        className={({ isActive }) =>
                                            `block max-md:px-4 max-md:hover:bg-destructive max-md:hover:text-white prog-link text-[.83rem] md:text-[.9rem] text-black/80 font-medium capitalize py-3 md:py-2.5 ${isActive ? 'text-primary font-bold' : ''}`
                                        }
                                        to={"/programme/" + slugify(x.categ)}
                                    >
                                        {translatedLabel}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Contenu principal */}
                <div className='w-full md:w-[62%] px-0 md:px-4'>
                    <ProgramCategory
                        category={detail.categ}
                        title={translatedTitle}
                        problems={detail.body.probleme}
                        methodology={detail.body.method}
                        solutions={detail.body.solution}
                    />
                </div>

                {/* Navigation rapide */}
                <ul className='w-[15%] max-md:hidden sticky top-[20px] h-fit text-[.95rem] font-medium px-5 py-6 bg-gray-100 rounded-[7px]'>
                    <li className='p-2'>
                        {t('programmes.sections.problemes', 'Problèmes')}
                    </li>
                    <li className='p-2'>
                        {t('programmes.sections.methodes', 'Méthodologie')}
                    </li>
                    <li className='p-2'>
                        {t('programmes.sections.solutions', 'Solutions')}
                    </li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="pb-14 px-[6.5%] text-center">
                <div className="flex flex-col gap-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
                    <h3 className="text-[1.2rem] md:text-[1.7rem] font-bold text-primary leading-1">
                        {t('programDetail.cta.title', 'Rejoignez notre mouvement')}
                    </h3>
                    <p className="text-muted-foreground text-[.86rem] md:text-[1rem] m-0 leading-1 max-w-3xl mx-auto">
                        {t('programDetail.cta.description', 'Ensemble, nous pouvons construire un avenir meilleur pour tous les {{category}} du Cameroun.', {
                            category: translatedTitle.toLowerCase()
                        })}
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="w-full text-xs md:text-lg rounded-[5px] md:w-[40%] mt-2 text-white px-6 py-2.5 mx-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                    >
                        {t('nav.rejoindre', 'Nous rejoindre')}
                    </button>
                </div>
            </div>

            <RejoindreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Footer />
        </>
    );
}

export default ProgrammeDetail;