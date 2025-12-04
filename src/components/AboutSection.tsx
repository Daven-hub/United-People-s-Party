import { Users, Target, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const fondements = [
    {
      title: t("about.federation.title"),
      color: "bg-primary",
      descrip: t("about.federation.description")
    },
    {
      title: t("about.vision.title"),
      color: "bg-secondary",
      descrip: t("about.vision.description")
    },
    {
      title: t("about.inclusive.title"),
      color: "bg-accent",
      descrip: t("about.inclusive.description")
    },
    {
      title: t("about.strategy.title"),
      color: "bg-gradient-hero",
      descrip: t("about.strategy.description")
    }
  ];

  return (
    <section
      ref={ref}
      className="relative px-[6.5%] flex flex-col gap-8 bg-white pb-20"
    >
      <motion.div className="text-center">
        <h3 className="text-xl md:text-4xl font-bold mb-1.5">{t("about.sectionTitle")}</h3>
        <p className="text-[.9rem] md:text-[1.1rem] text-primary max-w-3xl mx-auto">
          {t("about.description")}
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className="grid border-y border-gray-300 border-dashed grid-cols-1 md:grid-cols-4">
        {fondements.map((x, index) =>
          <motion.div key={index} className="bg-white/80 border-b border-dashed md:border-r md:border-b-0 border-gray-300 last-of-type:border-none backdrop-blur-xs py-8 px-8">
            <h4 className="text-[1.1rem] font-bold mb-2 flex flex-col items-center gap-3">
              <span className={`${x.color} text-white rounded-full w-8 h-8 flex items-center justify-center`}>{index + 1}</span>
              <span className="text-xl sm:text-2xl font-bold text-foreground">{x.title}</span>
            </h4>
            <p className="text-[.9rem] text-center text-primary leading-relaxed">
              {x.descrip}
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default AboutSection;
