import { Lightbulb, Brain, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const PillarsSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const pillars = [
    {
      icon: Lightbulb,
      title: t("pillars.youth.title"),
      subtitle: t("pillars.youth.subtitle"),
      description: t("pillars.youth.description"),
      gradient: "bg-gradient-accent",
      color: "text-secondary",
      delay: 0.2
    },
    {
      icon: Brain,
      title: t("pillars.mindset.title"),
      subtitle: t("pillars.mindset.subtitle"),
      description: t("pillars.mindset.description"),
      gradient: "bg-gradient-hero",
      color: "text-secondary",
      delay: 0.4
    },
    {
      icon: RefreshCw,
      title: t("pillars.change.title"),
      subtitle: t("pillars.change.subtitle"),
      description: t("pillars.change.description"),
      gradient: "bg-secondary",
      color: "text-secondary",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-20 px-[6.5%] sm:px-[6.5%] bg-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            initial={{
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, Math.random() * 2 + 1, 0],
              transition: { duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5 }
            }}
            style={{ width: `${Math.random() * 200 + 50}px`, height: `${Math.random() * 200 + 50}px` }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div className="text-center flex flex-col gap-1.5">
          <motion.div
            className="inline-flex w-fit mx-auto items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <RefreshCw className="w-3 h-3 text-accent animate-spin-slow" />
            <span className="text-accent text-xs font-semibold">{t("pillars.sectionLabel")}</span>
          </motion.div>

          <motion.h2
            className="text-[1.78rem] md:text-[2.7rem] font-bold text-foreground leading-[1.25]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("pillars.titlePrefix")} <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">{t("pillars.titleHighlight")}</span> {t("pillars.titleSuffix")}
          </motion.h2>

          <motion.span
            className="text-[.9rem] md:text-[1.15rem] text-primary w-fit mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("pillars.subtitle")}
          </motion.span>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" variants={containerVariants}>
          {pillars.map((pillar, index) => (
            <Card key={index} className="h-full group hover:shadow-xl transition-all duration-300 border border-muted/50 bg-card/50 backdrop-blur-sm overflow-hidden relative">
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full ${pillar.gradient}`}
                    initial={{ opacity: 0, x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      x: [0, Math.random() * 100 - 50],
                      y: [0, Math.random() * 100 - 50],
                      transition: { duration: Math.random() * 10 + 5, repeat: Infinity, delay: Math.random() * 3 }
                    }}
                    style={{ width: `${Math.random() * 6 + 2}px`, height: `${Math.random() * 6 + 2}px` }}
                  />
                ))}
              </div>

              <CardHeader className="text-center pb-3 relative z-10">
                <motion.div
                  className={`w-20 h-20 sm:w-24 sm:h-24 ${pillar.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: pillar.delay, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5, transition: { type: "spring", stiffness: 500 } }}
                >
                  <pillar.icon className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <motion.h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  {pillar.title}
                </motion.h3>

                <motion.p className={`text-lg font-bold ${pillar.color}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  {pillar.subtitle}
                </motion.p>
              </CardHeader>

              <CardContent className="pt-0 px-6 sm:px-8 pb-8 relative z-10">
                <motion.p className="text-primary leading-relaxed text-center text-base sm:text-[1.05rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {pillar.description}
                </motion.p>

                <motion.div className="flex justify-center mt-6" initial={{ width: 0 }} animate={{ width: "5rem" }}>
                  <div className={`h-1 ${pillar.gradient} rounded-full`} />
                </motion.div>

                <motion.div className="text-center mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="inline-flex items-center gap-2 text-sm text-secondary">
                    <motion.span
                      className={`w-2 h-2 rounded-full ${pillar.color}`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: pillar.delay + 0.6 }}
                    />
                    <span>{t("pillars.pillarLabel")} {index + 1}</span>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PillarsSection;
