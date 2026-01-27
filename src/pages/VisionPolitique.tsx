import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Lightbulb, Quote, ArrowRight, BarChart2, Users, Flag, BookOpen, Shield, FileText, UserPlus, RefreshCw, TrendingUp, Clock, Download } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { values } from "@/components/valeurs";
import { useTranslation } from "react-i18next";
import RejoindreModal from "@/components/RejoindreModal";

export default function VisionPage() {
  // Animations simplifiées
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Bannière heroVision sobre */}
      <section className="relative bg-gradient-to-r from-primary via-primary-light to-accent text-primary-foreground min-h-[500px] flex items-center px-[6.5%] py-12 overflow-hidden w-full">

        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/CNGP.png')] bg-repeat"></div>

        <div className="container mx-auto relative z-10 ">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8 }}
                className="border-l-4 border-white pl-6 mb-8"
              >
                <h1 className="text-[1.50rem] md:text-[3.75rem] font-bold leading-[1.25] md:leading-[1.15] tracking-tight">
                  {t("heroVision.title")} <br />
                  <span className="text-secondary">
                    {t("heroVision.subtitle")}
                  </span>
                </h1>
              </motion.div>

              <motion.p
                className="text-[0.9rem] md:text-[1.27rem] opacity-95 leading-relaxed animate-fadeInUp [animation-delay:0.6s] max-w-[90%] mb-4"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {t("heroVision.quote")}
              </motion.p>

              <div className="w-full flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-8 py-6 text-lg"
                  asChild
                >
                  <button onClick={() => setIsModalOpen(true)}>
                    {t("heroVision.join")}
                    <ArrowRight className="ml-2 w-7 h-7" />
                  </button>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary font-bold px-8 py-6 text-lg"
                >
                  <Download className="mr-2 w-7 h-7" />
                  {t("heroVision.download")}
                </Button>
              </div>
            </div>

            <div className="md:w-1/3 w-full mt-12 md:mt-0">
              <motion.img
                src="/images/galerie2/24.jpg"
                alt={t("heroVision.imageAlt")}
                className="w-full h-auto object-cover border-4 border-white border-t-primary border-b-secondary border-r-accent shadow-lg"
                initial="hidden"
                animate="visible"
                variants={slideIn}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </section>





      {/* Section Vision Stratégique */}
      <section className="relative py-16 bg-gray-50 overflow-hidden px-[6.5%]">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 opacity-10 z-0 hidden lg:block">
          <img
            src="/pays.png"
            alt={t("visionVision.patternAlt")}
            className="w-full h-full object-cover object-left"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <div className="lg:w-2/5 flex items-center">
              <motion.div
                className="relative w-full"
                initial="hidden"
                whileInView="visible"
                variants={slideIn}
                viewport={{ once: true }}
              >
                <img
                  src="/About/loveCamer.png"
                  alt={t("visionVision.imageAlt")}
                  className="w-full h-auto max-w-[400px] mx-auto border border-gray-200 shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 text-sm font-medium">
                  {t("visionVision.plan")}
                </div>
              </motion.div>
            </div>

            <div className="lg:w-3/5">
              <motion.div
                className="mb-8"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-bounce-horizontal">
                  <Flag className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">
                    {t("visionVision.badge")}
                  </span>
                </div>

                <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
                  {t("visionVision.title1")}{" "}
                  <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {t("visionVision.title2")}
                  </span>
                </motion.h2>

                <p className="text-[.9rem] md:text-[1.1rem] text-primary max-w-3xl mx-auto">
                  {t("visionVision.description")}
                </p>
              </motion.div>

              <div className="space-y-6">
                {[
                  {
                    title: t("visionVision.blocks.0.title"),
                    description: t("visionVision.blocks.0.description"),
                    icon: Users
                  },
                  {
                    title: t("visionVision.blocks.1.title"),
                    description: t("visionVision.blocks.1.description"),
                    icon: BarChart2
                  },
                  {
                    title: t("visionVision.blocks.2.title"),
                    description: t("visionVision.blocks.2.description"),
                    icon: BookOpen
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 p-3 flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-16 md:py-24 bg-white overflow-hidden px-[6.5%]">
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="/UPP.png"
              alt={t("values.backgroundAlt")}
              className="w-full h-full object-cover object-center opacity-10 md:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-bounce-horizontal">
              <Flag className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">
                {t("values.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {t("values.title1")}{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t("values.title2")}
              </span>
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t("values.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-8 md:space-y-12">
              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 border border-gray-200 shadow-sm">
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      title: t("values.blocks.0.title"),
                      description: t("values.blocks.0.description"),
                      icon: Shield
                    },
                    {
                      title: t("values.blocks.1.title"),
                      description: t("values.blocks.1.description"),
                      icon: Clock
                    },
                    {
                      title: t("values.blocks.2.title"),
                      description: t("values.blocks.2.description"),
                      icon: TrendingUp
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex gap-4 md:gap-6"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 bg-primary/10 p-3 md:p-4 border border-primary/20">
                        <value.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">
                          {value.title.toUpperCase()}
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="block md:hidden">
                <motion.div className="h-full min-h-[300px] border border-gray-300 shadow-md overflow-hidden">
                  <img
                    src="/About/spirale.png"
                    alt={t("values.imageAlt")}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="bg-primary text-white px-4 py-2 md:px-6 md:py-3">
                    <p className="font-medium flex items-center gap-2 text-sm md:text-base">
                      <Flag className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{t("values.imageCaption")}</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-12">
              <div className="hidden md:block">
                <motion.div className="h-full min-h-[300px] lg:min-h-[400px] border border-gray-300 shadow-md overflow-hidden">
                  <img
                    src="/About/spirale.png"
                    alt={t("values.imageAlt")}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="bg-primary text-white px-4 py-2 md:px-6 md:py-3">
                    <p className="font-medium flex items-center gap-2 text-sm md:text-base">
                      <Flag className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{t("values.imageCaption")}</span>
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 border border-gray-200 shadow-sm">
                <div className="space-y-6 md:space-y-8">
                  {[
                    {
                      title: t("values.blocks.3.title"),
                      description: t("values.blocks.3.description"),
                      icon: Heart
                    },
                    {
                      title: t("values.blocks.4.title"),
                      description: t("values.blocks.4.description"),
                      icon: Users
                    }
                  ].map((value, index) => (
                    <motion.div
                      key={index + 3}
                      className="flex gap-4 md:gap-6"
                      initial="hidden"
                      whileInView="visible"
                      variants={fadeIn}
                      viewport={{ once: true }}
                      transition={{ delay: (index + 3) * 0.1 }}
                    >
                      <div className="flex-shrink-0 bg-primary/10 p-3 md:p-4 border border-primary/20">
                        <value.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-2">
                          {value.title.toUpperCase()}
                        </h3>
                        <p className="text-sm md:text-base text-gray-700">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Section Comparaison Interactive */}
      <NewPoliticsSection />


      {/* CTA Final avec animation */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-white/5"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t("cta.title1")}{" "}
              <span className="text-yellow-300">{t("cta.highlight")}</span>{" "}
              {t("cta.title2")}
            </h2>

            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              {t("cta.subtitle")}
            </p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button onClick={() => setIsModalOpen(true)} className="bg-white text-primary hover:bg-gray-100 px-8 py-4 font-bold shadow-lg">
                {t("cta.buttons.join")}
              </Button>
              <Button variant="outline" className="text-primary border-white px-8 py-4 shadow-lg">
                {t("cta.buttons.download")}
              </Button>
              <Button variant="outline" className="text-primary border-white hover:bg-white/10 px-8 py-4 shadow-lg">
                {t("cta.buttons.donate")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <RejoindreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}





;

export const NewPoliticsSection = () => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("newPolitics.columns.0.title"),
      color: "text-secondary/70",
      icon: Clock,
      items: t("newPolitics.columns.0.items", { returnObjects: true }) as string[],
      stats: t("newPolitics.columns.0.stats")
    },
    {
      title: t("newPolitics.columns.1.title"),
      color: "text-secondary/70",
      icon: RefreshCw,
      items: t("newPolitics.columns.1.items", { returnObjects: true }) as string[],
      stats: t("newPolitics.columns.1.stats")
    },
    {
      title: t("newPolitics.columns.2.title"),
      color: "text-secondary/70",
      icon: TrendingUp,
      items: t("newPolitics.columns.2.items", { returnObjects: true }) as string[],
      stats: t("newPolitics.columns.2.stats")
    }
  ];

  return (
    <section className="md:py-24 lg:py-32 bg-background px-[6.5%]">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
            {t("newPolitics.title1")}{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {t("newPolitics.title2")}
            </span>{" "}
            {t("newPolitics.title3")}
          </motion.h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            {t("newPolitics.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className="bg-background border border-border/50 p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6 ${index === 0 ? "bg-primary/10" : index === 1 ? "bg-primary/10" : "bg-primary/10"
                  }`}
              >
                <column.icon className={`w-6 h-6 ${column.color}`} />
              </div>

              <h3 className={`text-2xl font-bold mb-6 ${column.color}`}>{column.title}</h3>

              <ul className="space-y-4 mb-8">
                {column.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${index === 0 ? "bg-secondary" : index === 1 ? "bg-secondary" : "bg-secondary"
                        }`}
                    ></span>
                    <span className="text-primary">{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0
                  ? "bg-gray-100 text-gray-700"
                  : index === 1
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary text-primary"
                  }`}
              >
                {column.stats}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
