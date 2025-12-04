import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Building,
  GraduationCap,
  Heart,
  Zap,
  Leaf,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Briefcase
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Programme = () => {
  const { t } = useTranslation();

  const priorities = [
    {
      icon: TrendingUp,
      titleKey: "programm.priorities.economy.title",
      defaultTitle: "Économie & Emploi",
      subtitleKey: "programm.priorities.economy.subtitle",
      defaultSubtitle: "Croissance inclusive et durable",
      color: "bg-primary",
      proposalsKey: "programm.priorities.economy.proposals",
      defaultProposals: [
        "Création d'un million d'emplois en 5 ans",
        "Soutien aux PME et startups camerounaises",
        "Industrialisation du secteur agricole",
        "Développement du tourisme local"
      ]
    },
    {
      icon: GraduationCap,
      titleKey: "programm.priorities.education.title",
      defaultTitle: "Éducation & Formation",
      subtitleKey: "programm.priorities.education.subtitle",
      defaultSubtitle: "Capital humain de qualité",
      color: "bg-secondary",
      proposalsKey: "programm.priorities.education.proposals",
      defaultProposals: [
        "Réforme du système éducatif national",
        "Formation technique et professionnelle",
        "Université numérique camerounaise",
        "Bourses d'excellence pour la diaspora"
      ]
    },
    {
      icon: Heart,
      titleKey: "programm.priorities.health.title",
      defaultTitle: "Santé & Social",
      subtitleKey: "programm.priorities.health.subtitle",
      defaultSubtitle: "Bien-être pour tous",
      color: "bg-accent",
      proposalsKey: "programm.priorities.health.proposals",
      defaultProposals: [
        "Couverture maladie universelle",
        "Modernisation des hôpitaux publics",
        "Médecine préventive et vaccination",
        "Soutien aux personnes vulnérables"
      ]
    },
    {
      icon: Building,
      titleKey: "programm.priorities.infrastructure.title",
      defaultTitle: "Infrastructures",
      subtitleKey: "programm.priorities.infrastructure.subtitle",
      defaultSubtitle: "Modernisation du pays",
      color: "bg-primary",
      proposalsKey: "programm.priorities.infrastructure.proposals",
      defaultProposals: [
        "Routes et ponts de qualité",
        "Électrification rurale complète",
        "Internet haut débit national",
        "Logements sociaux accessibles"
      ]
    },
    {
      icon: Shield,
      titleKey: "programm.priorities.security.title",
      defaultTitle: "Sécurité & Justice",
      subtitleKey: "programm.priorities.security.subtitle",
      defaultSubtitle: "État de droit renforcé",
      color: "bg-accent",
      proposalsKey: "programm.priorities.security.proposals",
      defaultProposals: [
        "Réforme de la police et gendarmerie",
        "Justice indépendante et efficace",
        "Lutte contre la corruption",
        "Sécurité des frontières"
      ]
    },
    {
      icon: Leaf,
      titleKey: "programm.priorities.environment.title",
      defaultTitle: "Environnement",
      subtitleKey: "programm.priorities.environment.subtitle",
      defaultSubtitle: "Développement durable",
      color: "bg-secondary",
      proposalsKey: "programm.priorities.environment.proposals",
      defaultProposals: [
        "Protection des forêts camerounaises",
        "Énergies renouvelables",
        "Gestion des déchets urbains",
        "Agriculture écologique"
      ]
    }
  ];

  const reforms = [
    {
      titleKey: "programm.reforms.constitutional.title",
      defaultTitle: "Réforme Constitutionnelle",
      descriptionKey: "programm.reforms.constitutional.description",
      defaultDescription: "Renforcement de la démocratie et des contre-pouvoirs",
      itemsKey: "programm.reforms.constitutional.items",
      defaultItems: ["Limitation des mandats", "Séparation des pouvoirs", "Décentralisation effective"]
    },
    {
      titleKey: "programm.reforms.digital.title",
      defaultTitle: "Gouvernance Digitale",
      descriptionKey: "programm.reforms.digital.description",
      defaultDescription: "Administration moderne et transparente",
      itemsKey: "programm.reforms.digital.items",
      defaultItems: ["E-administration", "Open data", "Participation citoyenne"]
    },
    {
      titleKey: "programm.reforms.diaspora.title",
      defaultTitle: "Intégration Diaspora",
      descriptionKey: "programm.reforms.diaspora.description",
      defaultDescription: "Mobilisation des compétences camerounaises à l'étranger",
      itemsKey: "programm.reforms.diaspora.items",
      defaultItems: ["Double nationalité", "Vote à l'étranger", "Investissements diaspora"]
    }
  ];

  const objectives = [
    {
      value: "8%",
      labelKey: "programm.objectives.growth.label",
      defaultLabel: "Croissance PIB annuelle"
    },
    {
      value: "85%",
      labelKey: "programm.objectives.electrification.label",
      defaultLabel: "Taux d'électrification"
    },
    {
      value: "1M",
      labelKey: "programm.objectives.jobs.label",
      defaultLabel: "Emplois créés"
    },
    {
      value: "95%",
      labelKey: "programm.objectives.healthcare.label",
      defaultLabel: "Couverture santé"
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 flex flex-col gap-1.5 items-center px-[6.5%] bg-gradient-hero text-white">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-up">
            {t("programm.hero.title", "Notre Programme")}
          </h1>
          <p className="text-[.9rem] md:text-lg leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t("programm.hero.subtitle", "Un projet de société pour transformer le Cameroun")}
          </p>
          <div className="flex mt-2 justify-center">
            <Badge variant="secondary" className="px-6 py-2 text-sm">
              {t("programm.hero.badge", "Vision 2035 : Cameroun Émergent")}
            </Badge>
          </div>
        </div>
      </section>

      {/* Vision Générale */}
      <section className="py-20 px-[6.5%]">
        <h2 className="text-4xl font-bold text-center text-foreground mb-6">
          {t("programm.vision.title", "Notre Vision")}
        </h2>
        <div className="bg-gradient-card p-8 md:p-12 rounded-3xl">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            {t("programm.vision.quote", "\"Faire du Cameroun une puissance économique africaine d'ici 2035\"")}
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            {t("programm.vision.description", "Notre programme s'articule autour de 6 priorités nationales, avec pour objectif de créer un {bold}Cameroun prospère, juste et moderne{/bold} qui offre des opportunités à tous ses citoyens.", {
              bold: (children) => <span className="text-primary font-semibold">{children}</span>
            })}
          </p>
        </div>
      </section>

      {/* Priorités Nationales */}
      <section className="py-20 px-[6.5%] bg-muted/30">
        <h2 className="text-4xl font-bold text-foreground text-center mb-6">
          {t("programm.priorities.title", "6 Priorités Nationales")}
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {priorities.map((priority, index) => {
            const title = t(priority.titleKey, { defaultValue: priority.defaultTitle });
            const subtitle = t(priority.subtitleKey, { defaultValue: priority.defaultSubtitle });
            const proposals = t(priority.proposalsKey, { returnObjects: true, defaultValue: priority.defaultProposals }) as string[];

            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 ${priority.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <priority.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{title}</h3>
                  <p className="text-primary font-semibold">{subtitle}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {proposals.map((proposal, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-muted-foreground">{proposal}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Réformes Structurelles */}
      <section className="py-20 px-[6.5%]">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-foreground mb-2">
            {t("programm.reforms.title", "Réformes Structurelles")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("programm.reforms.subtitle", "Des transformations profondes pour moderniser nos institutions")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reforms.map((reform, index) => {
            const title = t(reform.titleKey, { defaultValue: reform.defaultTitle });
            const description = t(reform.descriptionKey, { defaultValue: reform.defaultDescription });
            const items = t(reform.itemsKey, { returnObjects: true, defaultValue: reform.defaultItems }) as string[];

            return (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {items.map((item, i) => (
                      <Badge key={i} variant="outline" className="mr-2 mb-2">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Objectifs Chiffrés */}
      <section className="py-20 px-[6.5%] bg-primary/5">
        <h2 className="text-4xl text-center font-bold text-foreground mb-8">
          {t("programm.objectives.title", "Objectifs 2035")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => {
            const label = t(objective.labelKey, { defaultValue: objective.defaultLabel });

            return (
              <div key={index} className="bg-background flex flex-col items-center p-8 rounded-2xl shadow-elegant">
                <div className="text-4xl font-bold text-primary mb-2">{objective.value}</div>
                <div className="text-muted-foreground text-center">{label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Programme;