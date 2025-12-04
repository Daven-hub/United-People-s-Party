import { Users, MapPin, Shield, FileText, Flag } from "lucide-react";
import { useTranslation } from "react-i18next";

const StatsSection = () => {
    const { t } = useTranslation();

    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            value: "3",
            title: t("stats.pillars.title"),
            description: t("stats.pillars.description"),
            color: "primary"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            value: "1",
            title: t("stats.vision.title"),
            description: t("stats.vision.description"),
            color: "accent"
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            value: "10",
            title: t("stats.regions.title"),
            description: t("stats.regions.description"),
            color: "secondary"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            value: "∞",
            title: t("stats.potential.title"),
            description: t("stats.potential.description"),
            color: "primary"
        },
    ];

    return (
        <section className="bg-background px-[6.5%] py-16 md:py-20 relative">
            {/* Logo de fond */}
            <div className="absolute h-[80%] w-[80%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-0 opacity-20">
                <img
                    className="absolute h-full w-full object-contain"
                    src={"/UPP.png"}
                    alt="ANG Logo"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                {/* Texte gauche */}
                <div className="flex flex-col">
                    <div className="inline-flex w-fit items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-4 animate-bounce-horizontal">
                        <Flag className="w-3 h-3 text-primary" />
                        <span className="text-primary text-xs font-semibold">{t("stats.approach")}</span>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5">
                        <h2 className="text-[1.78rem] md:text-[3rem] font-bold text-foreground leading-[1.25]">
                            {t("stats.highlightedTitle")}{" "}
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                                {t("stats.highlight")}
                            </span>
                        </h2>

                        <p className="text-primary text-[1rem] md:text-[1.12rem] leading-relaxed">
                            {t("stats.description")}
                        </p>

                        {/* Méthodologie */}
                        <div className="hidden lg:flex flex-col gap-2 bg-secondary/5 border border-secondary/10 rounded-xl px-6 py-4 backdrop-blur-sm animate-fade-up mt-4">
                            <h4 className="font-bold text-[1.12rem] text-secondary">{t("stats.methodology.title")}</h4>
                            <p className="text-primary text-[.95rem]">
                                {t("stats.methodology.description")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex gap-3 relative flex-col h-full p-6 bg-card border border-border shadow-sm hover:shadow-glow transition-all duration-500">
                            <div className="flex items-center">
                                <div
                                    className={`mr-3 p-2 bg-${stat.color}/10 rounded-lg text-${stat.color} animate-floatMagic`}
                                    style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                                >
                                    {stat.icon}
                                </div>
                                <span
                                    className={`text-4xl font-bold text-${stat.color} animate-pulse-glow`}
                                    style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
                                >
                                    {stat.value}
                                </span>
                            </div>

                            <h3 className={`text-[1.12rem] font-medium text-foreground group-hover:text-${stat.color} transition-colors`}>
                                {stat.title}
                            </h3>
                            <p className="text-primary text-[.9rem]">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Note en bas */}
            <p className="mt-5 text-primary italic text-[.8rem] max-w-3xl mx-auto text-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
                {t("stats.footerNote")}
            </p>
        </section>
    );
};

export default StatsSection;
