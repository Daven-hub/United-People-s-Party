import { Target, Users, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import React from "react";

interface ObjectifItem {
    title: string;
    desc: string;
}

const ObjectifsSection: React.FC = () => {
    const { t } = useTranslation();

    // Récupérer les objectifs depuis le JSON de traduction
    const objectifs: ObjectifItem[] = t("objectifs.items", { returnObjects: true }) as ObjectifItem[];

    return (
        <section className="relative bg-white overflow-hidden py-20 px-[6.5%]">
            {/* Image de fond en haut à gauche - discrète */}
            <div className="absolute top-0 right-0 w-full max-w-2xl opacity-10 z-0">
                <img
                    src="/About/monumentOne.png"
                    alt="Décoration"
                    className="w-full h-auto object-contain object-left-top"
                />
            </div>

            {/* Éléments décoratifs subtils */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px] animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-[90px] animate-float-medium"></div>
            </div>

            <div className="container mx-auto relative z-10">
                {/* En-tête */}
                <div className="text-center mb-16 relative">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-bounce-horizontal">
                        <Target className="w-5 h-5 text-primary" />
                        <span className="text-primary text-xs font-semibold">{t("objectifs.titleBadge")}</span>
                    </div>

                    <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
                        {t("objectifs.title").split(" ")[0]}{" "}
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            {t("objectifs.title").split(" ").slice(1).join(" ")}
                        </span>
                    </motion.h2>

                    <p className="text-[.9rem] md:text-[1.1rem] text-muted-foreground max-w-3xl mx-auto">
                        {t("objectifs.subtitle")}
                    </p>
                </div>

                {/* Contenu principal */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                    {/* Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative overflow-hidden aspect-video shadow-lg">
                            <img
                                src="/images/galerie/jeune.jpg"
                                alt={t("objectifs.imageAlt")}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Contenu texte - Liste dynamique */}
                    <div className="lg:w-1/2 w-full">
                        <div className="flex items-start gap-4 mb-8">
                            <div className="mt-1 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{t("objectifs.sectionTitle")}</h3>
                                <p className="text-gray-600">{t("objectifs.sectionDesc")}</p>
                            </div>
                        </div>

                        <ul className="space-y-6">
                            {objectifs.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Minimaliste */}
                <div className="text-center">
                    <div className="mb-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent max-w-2xl mx-auto"></div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">{t("objectifs.ctaTitle")}</h3>
                    <Button
                        variant="outline"
                        className="border-primary text-primary px-8 py-4 font-medium transition-colors"
                        asChild
                    >
                        <a href="/programme">
                            {t("objectifs.ctaButton")}
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ObjectifsSection;
