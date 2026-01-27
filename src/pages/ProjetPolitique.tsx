import Navigation from "@/components/Navigation";
import { ArrowRight, CheckCircle, Users, Globe, BarChart2, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { ProjetCard } from "@/components/ProjetCard";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import RejoindreModal from "@/components/RejoindreModal";
import { useState } from "react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const fadeInItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const ProjetPolitiquePage = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const AXES = t("programme.axes", { returnObjects: true }) as {
        title: string;
        subtitle: string;
        items: string[];
    }[];

    const stats = t("programme.stats", { returnObjects: true }) as {
        value: string;
        label: string;
        description: string;
    }[];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/90 via-primary-dark/90 to-primary-light/90 text-primary-foreground min-h-[500px] flex items-center px-[6.5%] py-12 overflow-hidden w-full">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/projets.png')] bg-cover bg-center opacity-20 mix-blend-lighten" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary-dark/70 to-primary-light/70" />
                    <div className="absolute inset-0 bg-noise opacity-10" />
                </div>

                <div className="container mx-auto relative">
                    <div className="max-w-3xl">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8 }}
                            className="relative pl-6 mb-8 border-l-4 border-accent"
                        >
                            <h1 className="text-[1.50rem] md:text-[3.75rem] font-bold leading-[1.25] md:leading-[1.15] tracking-tight">
                                <span>{t("programme.hero.title1")}</span>
                                <br />
                                <span className="text-secondary">{t("programme.hero.title2")}</span>
                            </h1>
                            <div className="mt-4 w-16 h-1 bg-secondary" />
                        </motion.div>

                        <motion.div className="grid gap-4 mb-8">
                            <div className="flex items-start">
                                <CheckCircle className="w-5 h-5 mt-1 mr-3 text-secondary flex-shrink-0" />
                                <p className="text-lg font-medium">
                                    {t("programme.hero.subtitle")}
                                </p>
                            </div>
                        </motion.div>

                        <motion.div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#axes"
                                className="bg-secondary justify-center flex items-center rounded-[10px] hover:bg-secondary-dark text-secondary-foreground font-bold px-8 py-2.5 text-[.85rem] md:text-[1rem] transition-all hover:scale-105"
                            >
                                {t("programme.hero.button")}
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Axes */}
            <section id="axes" className="relative py-16 md:py-24 bg-white overflow-hidden px-[6.5%]">
                <div
                    className="absolute top-0 left-0 w-1/3 h-1/3 bg-cover bg-no-repeat opacity-20 z-0"
                    style={{
                        backgroundImage: "url('/pays.png')",
                        backgroundPosition: "left top"
                    }}
                />

                <div
                    className="absolute top-1/2 left-1/2 w-[60%] h-[60%] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat opacity-15 z-0"
                    style={{
                        backgroundImage: "url('/UPP.png')",
                    }}
                />

                <div
                    className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cover bg-no-repeat opacity-20 z-20"
                    style={{
                        backgroundImage: "url('/jaune.png')",
                        backgroundPosition: "right bottom",
                        backgroundSize: "contain",
                        margin: "0",
                        padding: "0",
                    }}
                />

                <div className="absolute inset-0 bg-noise opacity-[3%] z-0" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold">
                            {t("programme.axesTitle")}
                        </motion.h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            {t("programme.axesSubtitle")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        {AXES.map((projet, index) => (
                            <ProjetCard
                                key={index}
                                title={projet.title}
                                subtitle={projet.subtitle}
                                items={projet.items}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="relative py-16 md:py-24 bg-white px-[6.5%]">
                <div className="container mx-auto relative z-10">
                    <motion.div
                        className="text-center mb-12 md:mb-16"
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold">
                            {t("programme.impactTitle")}
                        </motion.h2>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            {t("programme.impactSubtitle")}
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <motion.div className="w-full lg:w-1/2">
                            <div className="relative overflow-hidden shadow-2xl border border-gray-200">
                                <img src="/images/galerie2/19.jpg" alt="impact" className="w-full h-auto object-cover" />
                            </div>
                        </motion.div>

                        <div className="w-full lg:w-1/2">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                            >
                                {[Users, Globe, BarChart2, BookOpen].map((Icon, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInItem}
                                        className="bg-white p-6 border shadow"
                                    >
                                        <Icon className="w-6 h-6 text-primary mb-2" />
                                        <h3 className="text-xl font-bold">{stats[index].value}</h3>
                                        <p className="font-semibold">{stats[index].label}</p>
                                        <p className="text-sm text-gray-600">{stats[index].description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary to-secondary text-white px-[6.5%] overflow-hidden">
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                            {t("programme.ctaTitle")}
                        </motion.h2>

                        <motion.p className="text-lg mb-8 max-w-2xl mx-auto">
                            {t("programme.ctaSubtitle")}
                        </motion.p>

                        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-white text-primary hover:bg-gray-100 flex items-center justify-center rounded-[10px] font-bold px-8 py-3 transition-all hover:scale-105 shadow-lg"
                            >
                                {t("programme.ctaJoin")}
                            </button>

                            <a
                                href="/contact"
                                className="bg-transparent border-2 border-white hover:bg-white/10 flex items-center justify-center rounded-[10px] font-bold px-8 py-3 transition-all hover:scale-105"
                            >
                                {t("programme.ctaContact")}
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
            <RejoindreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};
