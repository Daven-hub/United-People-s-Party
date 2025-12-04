import { Flag } from "lucide-react";
import { motion } from "framer-motion";
import Gallery from "./Gallery";
import { useTranslation } from "react-i18next";
import React from "react";

interface Step {
    title: string;
    desc: string;
    list?: string[];
}

const HistoireSection: React.FC = () => {
    const { t } = useTranslation();

    const steps: Step[] = t("histoire.steps", { returnObjects: true }) as Step[];

    return (
        <section className="relative overflow-hidden mx-4 my-10">
            <div
                className="absolute right-0 top-0 w-1/3 h-1/3 max-w-md opacity-30 z-0"
                style={{
                    backgroundImage: "url('/pays.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "right top",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>

            <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="px-[6.5%] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-bounce-horizontal">
                        <Flag className="w-5 h-5 text-primary" />
                        <span className="text-primary text-xs font-semibold">{t("histoire.parcours")}</span>
                    </div>

                    <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
                        {t("histoire.title").split(" ")[0]}{" "}
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            {t("histoire.title").split(" ").slice(1).join(" ")}
                        </span>
                    </motion.h2>

                    <p className="text-[.9rem] md:text-[1.1rem] text-primary max-w-3xl mx-auto">
                        {t("histoire.subtitle")}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-1/2 space-y-8 relative bg-white/90 backdrop-blur-sm">
                        <div className="relative pl-8 border-l-4 border-primary/50">
                            {steps.map((step, index) => (
                                <div key={index} className={`mb-10 relative ${index === steps.length - 1 ? "mb-0" : ""}`}>
                                    <div
                                        className={`absolute -left-11 top-1 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-md ${index === 0 ? "bg-primary" : index === 1 ? "bg-secondary" : "bg-accent"
                                            }`}
                                    >
                                        {index + 1}
                                    </div>

                                    <h3
                                        className={`text-2xl font-bold mb-3 ${index === 0 ? "text-primary" : index === 1 ? "text-secondary" : "text-accent"
                                            }`}
                                    >
                                        {step.title}
                                    </h3>

                                    <p className="text-[.9rem] text-primary leading-relaxed">
                                        {step.desc}
                                        {step.list && (
                                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                                {step.list.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-lg text-primary mt-8 bg-primary/5 rounded-r-lg">
                            {t("histoire.quote")}
                        </blockquote>
                    </div>

                    <Gallery />
                </div>
            </div>
        </section>
    );
};

export default HistoireSection;
