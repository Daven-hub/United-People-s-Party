import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flag, Globe, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import StatsSection from "@/components/stats";
import { useTranslation } from "react-i18next";
import ActualiteSection from "@/components/ActualiteSection";

const Index = () => {
  const { t } = useTranslation();

  const datas = [
    {
      title: t("index.datas.0.title"),
      descrip: t("index.datas.0.descrip"),
    },
    {
      title: t("index.datas.1.title"),
      descrip: t("index.datas.1.descrip"),
    },
    {
      title: t("index.datas.2.title"),
      descrip: t("index.datas.2.descrip"),
    },
  ];

  return (
    <>
      <Navigation />
      <div id="accueil">
        <Hero />
      </div>

      <ActualiteSection />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-primary/5 px-[6.5%] py-16 md:py-20">
        <div className="relative w-full h-[250px] rounded-[5px] overflow-hidden md:h-full">
          <img
            src="/images/galerie2/27.jpg"
            alt={t("index.aboutImgAlt")}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6" />
        </div>

        <div className="flex flex-col">
          <motion.div className="inline-flex items-center w-fit gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-2">
            <Globe className="w-3 h-3 text-primary" />
            <span className="text-primary text-xs font-semibold">{t("index.whoWeAre")}</span>
          </motion.div>

          <div className="flex flex-col gap-3">
            <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
              {t("index.heroIntro")}{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {t("index.partyName")}
              </span>
            </motion.h2>

            <motion.p className="text-primary text-[1rem] md:text-[1.12rem] leading-relaxed">
              {t("index.heroDescription")}
            </motion.p>

            <motion.div className="space-y-4 mt-3">
              <motion.div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg mt-1">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t("index.federation.title")}</h4>
                  <p className="text-[.9rem] md:text-[1rem] text-primary">{t("index.federation.descrip")}</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-2 rounded-lg mt-1">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{t("index.transformProject.title")}</h4>
                  <p className="text-[.9rem] md:text-[1rem] text-primary">{t("index.transformProject.descrip")}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="bg-muted/30 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <div className="relative h-[350px] md:h-full w-full overflow-hidden shadow-glow">
          <img
            src="/images/galerie2/23.jpg"
            alt={t("index.visionImgAlt")}
            className="w-full absolute h-full object-cover"
            style={{ animationDelay: "0.8s" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent flex items-end p-6">
            <p className="text-background font-medium text-lg">{t("index.visionQuote")}</p>
          </div>
        </div>

        <div className="px-[6.5%] bg-primary/85 py-14 md:py-14 flex flex-col animate-fade-up">
          <div className="inline-flex text-white items-center w-fit gap-2 bg-secondary/60 backdrop-blur-sm mb-2 border border-primary/20 rounded-full px-6 py-2 animate-bounce-horizontal">
            <Flag className="w-3 h-3 " />
            <span className="text-xs font-semibold">{t("index.commitments")}</span>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-[1.9rem] text-white md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
              {t("index.emergenceIntro")}{" "}
              <span className="bg-gradient-to-r from-destructive/95 via-destructive/65 to-secondary/95 bg-clip-text text-transparent">
                {t("index.emergenceHighlight")}
              </span>
            </h2>

            <div className="space-y-5">
              {datas.map((x, ind) => (
                <div key={ind} className="flex flex-col gap-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-[1.15rem] text-white md:text-[1.27rem] font-semibold text-foreground flex items-center">
                    <span className="w-6 h-6 bg-secondary/70 text-sm rounded-full flex items-center justify-center shrink-0 mr-2">{ind + 1}</span>
                    {x.title}
                  </h3>
                  <p className="text-white/95 text-[.93rem] md:text-[1rem]">{x.descrip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="piliers">
        <PillarsSection />
      </div>

      <div id="apropos">
        <AboutSection />
      </div>

      <div id="vision">
        <VisionSection />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </>
  );
};

export default Index;
