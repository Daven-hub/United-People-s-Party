import { Rocket, TrendingUp, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VisionSection = () => {
  const { t } = useTranslation();

  const visionPoints = [
    {
      icon: TrendingUp,
      title: t("vision.economicPower.title"),
      description: t("vision.economicPower.description")
    },
    {
      icon: Users,
      title: t("vision.diasporaIntegration.title"),
      description: t("vision.diasporaIntegration.description")
    },
    {
      icon: Heart,
      title: t("vision.civicEngagement.title"),
      description: t("vision.civicEngagement.description")
    },
    {
      icon: Rocket,
      title: t("vision.innovation.title"),
      description: t("vision.innovation.description")
    }
  ];

  return (
    <section className="py-20 px-[6%] bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="text-center mb-8 animate-fade-up">
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-1.5 mb-3">
          <Rocket className="w-3 h-3 text-primary" />
          <span className="text-primary text-xs font-semibold">{t("vision.sectionTitle")}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          {t("vision.mainTitle")} <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">{t("vision.highlight")}</span>
        </h2>

        <p className="text-[1rem] md:text-lg  max-w-4xl mx-auto leading-relaxed">
          {t("vision.descriptionIntro")}
          <span className="text-primary font-semibold"> {t("vision.descriptionHighlight")} </span>
          {t("vision.descriptionOutro")}
        </p>
      </div>

      <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center mb-10 animate-scale-in shadow-glow" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          {t("vision.quote")}
        </h3>
        <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
          {t("vision.quoteDescription")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {visionPoints.map((point, index) => (
          <Card
            key={index}
            className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1 animate-fade-up"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <point.icon className="w-8 h-8 text-secondary group-hover:text-primary-foreground" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                {point.title}
              </h4>
              <p className="text-sm text-primary leading-relaxed mt-2">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center animate-fade-up relative overflow-hidden" style={{ animationDelay: '0.7s' }}>
        <div className="absolute bottom-0 right-0 w-[200px] h-[150px] md:w-[250px] md:h-[180px] opacity-80 z-0">
          <img
            src="/rouge.png"
            alt="Décoration UPP"
            width={250}
            height={180}
            className="object-cover rounded-tl-2xl w-full h-full z-10"
          />
        </div>

        {/* Contenu principal */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 relative z-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("vision.callToAction.title")}
          </h3>
          <p className="text-lg  max-w-4xl mx-auto leading-relaxed mb-5">
            {t("vision.callToAction.description")}
            <span className="text-primary font-semibold">{t("vision.callToAction.highlight")}</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={'/contact'}>
              <Button variant="hero" className="text-[1rem] px-8 py-4">
                {t("vision.callToAction.joinButton")}
              </Button>
            </Link>
            <a href={'/coming-soon'}>
              <Button variant="outline" className="text-[.9rem] px-8 py-4">
                {t("vision.callToAction.discoverButton")}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;