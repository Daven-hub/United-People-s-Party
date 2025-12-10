import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import React from "react";

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="relative text-white min-h-[500px] md:min-h-[600px] flex items-center px-4 sm:px-6 py-12 overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-accent z-0 animate-gradient-x w-full h-full"></div>

            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 z-0 overflow-hidden h-full">
                <div className="w-full h-full relative overflow-hidden">
                    <img
                        src="/images/galerie2/28.jpg"
                        alt={t("heros.intro1")}
                        className="w-full h-full object-cover object-left transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            </div>

            <div className="md:hidden absolute inset-0 z-0 overflow-hidden w-full h-full">
                <div className="w-full h-full relative">
                    <img
                        src="/images/galerie2/30.jpg"
                        alt={t("heros.intro1")}
                        className="w-full h-full object-cover opacity-80 transform scale-100 hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full relative w-full">
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-6 pr-0 md:pr-10">
                    <h1 className="text-[1.50rem] md:text-[3.75rem] font-bold leading-[1.25] md:leading-[1.15] tracking-tight">
                        {t("heros.title")}
                    </h1>
                    <div className="relative w-full">
                        <p className="text-[0.9rem] md:text-[1.27rem] opacity-95 leading-relaxed animate-fadeInUp [animation-delay:0.6s] max-w-[90%]">
                            {t("heros.intro1")}<br />
                            {t("heros.intro2")}
                        </p>
                        <p className="text-[0.9rem] md:text-[1.27rem] opacity-95 leading-relaxed animate-fadeInUp [animation-delay:0.6s] max-w-[90%]">
                            {t("heros.desc")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-4">
                            <a
                                href="/rejoindre"
                                className="bg-secondary justify-center flex items-center rounded-[10px] hover:bg-secondary-dark text-secondary-foreground font-bold px-8 py-2.5 text-[.85rem] md:text-[1rem]"
                            >
                                {t("heros.join_upp")}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>

                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-primary-foreground hover:bg-primary-foreground hover:text-secondary-foreground font-semibold text-primary px-8 py-3 md:py-6 text-[.85rem] md:text-[1rem]"
                            >
                                {t("heros.discover_actions")}
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block w-1/2"></div>
            </div>
        </section>
    );
};

export default HeroSection;
