import { useState, useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowRight, CalendarDays, ChevronLeft, ChevronRight, Share2, Bookmark, ChevronDown, Mail, BellRing, CalendarCheck, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion"


const Actualites = () => {
  // Données des articles avec images réelles
  const articles = [
    {
      id: 1,
      title: "Lancement officiel de la Coalition Nouvelle Génération",
      excerpt: "La CNG présente officiellement sa vision pour un Cameroun transformé lors d'une grande cérémonie à Yaoundé réunissant plus de 5000 personnes.",
      content: "Le discours fondateur a mis l'accent sur la jeunesse, l'innovation et la gouvernance participative...",
      category: "Événement",
      date: "15 Janvier 2024",
      author: "Équipe CNG",
      authorRole: "Porte-parole officiel",
      readTime: "5 min",
      image: "/actualites/event-grand.jpg",
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: "Programme économique : 1 million d'emplois d'ici 2030",
      excerpt: "Stratégie ambitieuse pour créer des emplois durables et relancer l'économie à travers des secteurs clés.",
      content: "Le plan s'articule autour de 3 axes : industrialisation, numérique et agriculture moderne...",
      category: "Économie",
      date: "12 Janvier 2024",
      author: "Dr. Alexandre NGUEMA",
      authorRole: "Conseiller économique",
      readTime: "8 min",
      image: "/actualites/economy-plan.jpg",
      trending: true
    },
    {
      id: 3,
      title: "Tournée nationale : À la rencontre des Camerounais",
      excerpt: "L'ANG entame son dialogue citoyen dans les 10 régions pour co-construire son projet de société.",
      content: "Cette tournée sans précédent permettra d'écouter les préoccupations de chaque territoire...",
      category: "Politique",
      date: "10 Janvier 2024",
      author: "Marie FOKAM",
      authorRole: "Responsable mobilisation",
      readTime: "3 min",
      image: "/actualites/tournee-nationale.jpg"
    },
    {
      id: 4,
      title: "Diaspora camerounaise : Un potentiel stratégique",
      excerpt: "Plan d'intégration des compétences et investissements de la diaspora dans le développement national.",
      content: "Mise en place d'un cadre juridique et fiscal attractif pour les investisseurs de la diaspora...",
      category: "Diaspora",
      date: "8 Janvier 2024",
      author: "Joseph MBALLA",
      authorRole: "Responsable relations internationales",
      readTime: "6 min",
      image: "/actualites/diaspora-meeting.jpg"
    },
    {
      id: 5,
      title: "Réforme éducative : Priorité à l'excellence",
      excerpt: "Modernisation complète du système éducatif pour répondre aux défis du 21ème siècle.",
      content: "Le projet prévoit notamment la révision des curricula et la formation continue des enseignants...",
      category: "Éducation",
      date: "5 Janvier 2024",
      author: "Pr. Élisabeth MBALLA",
      authorRole: "Experte en pédagogie",
      readTime: "7 min",
      image: "/actualites/education-reform.jpg",
      trending: true
    },
    {
      id: 6,
      title: "Environnement : Équilibre écologique et développement",
      excerpt: "Stratégie nationale pour une croissance verte et durable respectant nos écosystèmes.",
      content: "Programme de reboisement massif couplé à des incitations pour les entreprises vertes...",
      category: "Environnement",
      date: "3 Janvier 2024",
      author: "Dr. Samuel EKOMBO",
      authorRole: "Conseiller environnement",
      readTime: "4 min",
      image: "/actualites/environment-plan.jpg"
    }
  ];

  // États pour le carrousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Fonction pour changer de slide
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Couleurs et styles
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Événement": "bg-primary text-primary-foreground",
      "Économie": "bg-secondary text-secondary-foreground",
      "Politique": "bg-accent text-accent-foreground",
      "Diaspora": "bg-primary-light text-primary-foreground",
      "Éducation": "bg-secondary-dark text-secondary-foreground",
      "Environnement": "bg-accent-light text-accent-foreground"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  // Articles organisés
  const featuredArticle = articles.find(article => article.featured);
  const featuredArticles = articles.filter(article => article.trending);
  const regularArticles = articles.filter(article => !article.featured && !article.trending);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Nouvelle version compacte de la bannière */}
      <section className="relative h-[80vh] min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Fond avec overlay amélioré */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/20 z-10" />
        <div className="absolute inset-0">
          <img
            src="/actualites/actualiter.png"
            alt="Bannière politique"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Contenu principal */}
        <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Partie texte avec animations améliorées */}
              <div className="space-y-4 md:space-y-6 animate-fadeInScale">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-tight text-white">
                  L'information <span className="text-secondary bg-clip-text bg-gradient-to-r from-secondary to-secondary/70">transparente</span> pour une démocratie éclairée
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-95 leading-relaxed text-white animate-fadeInUp [animation-delay:0.6s] max-w-[90%]">
                  Suivez en temps réel les actions et engagements de l'Alliance de la Nouvelle Génération.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                  <a
                    href="/rejoindre"
                    className="bg-secondary hover:bg-secondary/90 transition-colors duration-300 flex items-center justify-center rounded-lg text-white font-bold px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base"
                  >
                    Rejoindre le mouvement
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                  </a>


                </div>
              </div>

              {/* Carrousel amélioré */}
              <div
                className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[420px] w-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {featuredArticles.map((article, index) => (
                  <div
                    key={article.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <div className="h-full w-full flex flex-col bg-background  overflow-hidden shadow-xl">
                      {/* Image avec effet de zoom */}
                      <div className="relative flex-1 group overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </div>

                      {/* Contenu de la carte */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <Badge className={`${getCategoryColor(article.category)} mb-2 sm:mb-3 text-xs sm:text-sm`}>
                          {article.category}
                        </Badge>
                        <h3 className="text-lg sm:text-xl font-bold line-clamp-2 mb-2">{article.title}</h3>
                        <p className="text-white/90 text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">{article.excerpt}</p>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs sm:text-sm">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4" />
                              {article.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                              {article.readTime}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/10 group self-end sm:self-auto"
                          >
                            Lire
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Contrôles du carrousel améliorés */}
                <div className="absolute bottom-3 right-3 z-20 flex gap-2">
                  {featuredArticles.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-4 sm:w-6' : 'bg-white/30 hover:bg-white/50'}`}
                      aria-label={`Aller à l'article ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article vedette */}
      {featuredArticle && (
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
          {/* Image de fond discrète en haut à droite - version améliorée */}
          <div className="absolute top-0 right-0 w-full md:w-1/3 h-1/3 opacity-5 md:opacity-10 z-10">
            <img
              src="/actualites/cameroun.png"
              alt="Décoration"
              className="w-full h-full object-contain object-top-right"
              loading="lazy"
            />
          </div>

          <div className="max-w-7xl mx-auto relative ">
            <div className="text-center mb-12 md:mb-16">
              <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
                L'actualité <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">phare</span>
              </motion.h2>
              {/* <Separator className="w-24 mx-auto bg-primary h-1" /> */}
            </div>

            {/* Conteneur principal avec ombre au hover */}
            <div className="bg-background transition-all duration-300 overflow-hidden ">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Partie image avec effet de zoom au hover */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-full group overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                    <Badge className={`${getCategoryColor(featuredArticle.category)} text-sm md:text-lg px-3 py-1 md:px-4 md:py-2`}>
                      {featuredArticle.category}
                    </Badge>
                  </div>
                </div>

                {/* Partie contenu avec espacement amélioré */}
                <div className="p-6 sm:p-8 lg:p-10 xl:p-12 bg-background">
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 md:mb-6 text-muted-foreground text-sm sm:text-base">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>{featuredArticle.readTime} de lecture</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">
                        {featuredArticle.title}
                      </h3>

                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8 line-clamp-3">
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base">{featuredArticle.author}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{featuredArticle.authorRole}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg group flex-1 sm:flex-none">
                          Lire l'article complet
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="p-3 sm:p-4">
                          <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Toutes les actualités */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 bg-muted/10">
        <div className="max-w-7xl mx-auto">
          {/* En-tête amélioré */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
                Toute l'<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">actualité</span>
              </motion.h2>
              <p className="text-[.9rem] md:text-[1.1rem] text-muted-foreground max-w-3xl mx-auto">
                Retrouvez l'ensemble des publications, déclarations et analyses de l'Alliance de la Nouvelle Génération.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="lg" className="self-start md:self-auto">
                Voir les archives <ChevronRight className="w-4 h-4 ml-2" />
              </Button>

            </div>
          </div>

          {/* Contenu principal avec sidebar */}
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
            {/* Colonne gauche - Liste des articles */}
            <div className="lg:w-2/3">
              {/* Filtres */}
              <div className="mb-6 flex flex-wrap gap-2">
                <Button variant="default" size="sm">Tous</Button>
                <Button variant="outline" size="sm">Politique</Button>
                <Button variant="outline" size="sm">Économie</Button>
                <Button variant="outline" size="sm">Événements</Button>
                <Button variant="outline" size="sm">Diaspora</Button>
              </div>

              {/* Liste des articles */}
              <div className="grid gap-6 md:gap-8">
                {regularArticles.map((article) => (
                  <article key={article.id} className="bg-background  overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-muted/30">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-2/5 h-48 md:h-56 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className={`${getCategoryColor(article.category)} text-xs md:text-sm`}>
                            {article.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-3 hover:text-primary transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-2 md:line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>{article.author}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="group">
                            Lire l'article
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination améliorée */}
              <div className="mt-12">
                <nav className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">
                    Affichage <span className="font-medium">1-6</span> sur <span className="font-medium">24</span> articles
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="outline" size="sm" className="px-3">
                      <ChevronLeft className="w-4 h-4" />
                      <span className="sr-only">Précédent</span>
                    </Button>
                    <Button variant="default" size="sm" className="px-4">1</Button>
                    <Button variant="outline" size="sm" className="px-4">2</Button>
                    <Button variant="outline" size="sm" className="px-4">3</Button>
                    <Button variant="outline" size="sm" className="px-4">4</Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <span className="sr-only">Suivant</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </nav>
              </div>
            </div>

            {/* Colonne droite - Widgets */}
            <div className="lg:w-1/3 space-y-8">
              {/* Widget À la une */}
              <div className="bg-background p-6 rounded-xl border border-muted/30 shadow-sm">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-muted/30 flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-primary" />
                  <span>À la une</span>
                </h3>
                <div className="space-y-4">
                  {featuredArticles.slice(0, 3).map((article) => (
                    <div key={article.id} className="flex gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Badge className={`${getCategoryColor(article.category)} mb-1 text-xs`}>
                          {article.category}
                        </Badge>
                        <h4 className="font-medium text-sm line-clamp-2">{article.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Widget Événements à venir */}
              <div className="bg-background p-6 rounded-xl border border-muted/30 shadow-sm">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-muted/30 flex items-center gap-2">
                  <CalendarCheck className="w-5 h-5 text-primary" />
                  <span>Agenda politique</span>
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      day: "15",
                      month: "Fév",
                      title: "Conférence sur l'économie",
                      time: "09:00",
                      location: "Yaoundé"
                    },
                    {
                      id: 2,
                      day: "22",
                      month: "Fév",
                      title: "Rencontre avec la diaspora",
                      time: "14:00",
                      location: "Douala"
                    },
                    {
                      id: 3,
                      day: "03",
                      month: "Mar",
                      title: "Lancement programme éducation",
                      time: "10:30",
                      location: "Bafoussam"
                    }
                  ].map((event) => (
                    <div key={event.id} className="flex gap-4">
                      <div className="bg-primary/10 text-primary p-2 rounded-lg flex flex-col items-center justify-center min-w-12">
                        <span className="font-bold text-lg">{event.day}</span>
                        <span className="text-xs uppercase">{event.month}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {event.time} • {event.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 pl-0 text-primary">
                  Voir tout l'agenda
                </Button>
              </div>

              {/* Widget Galerie média */}
              <div className="bg-background p-6 rounded-xl border border-muted/30 shadow-sm">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-muted/30 flex items-center gap-2">
                  <Image className="w-5 h-5 text-primary" />
                  <span>Moment forts</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 1, src: "/actualites/gallery1.jpg", alt: "Discours du leader" },
                    { id: 2, src: "/actualites/gallery2.jpg", alt: "Rencontre populaire" },
                    { id: 3, src: "/actualites/gallery3.jpg", alt: "Table ronde économique" },
                    { id: 4, src: "/actualites/gallery4.jpg", alt: "Visite de terrain" }
                  ].map((image) => (
                    <div key={image.id} className="aspect-square overflow-hidden rounded-lg group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 pl-0 text-primary">
                  Voir toute la galerie
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter avec statistiques */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Restez <span className="text-primary">connecté</span> à l'actualité politique
            </h2>
            <p className="text-lg text-muted-foreground">
              Recevez nos analyses exclusives, les dernières prises de position et les annonces importantes directement dans votre boîte mail.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email professionnelle"
                  className="flex-1 px-6 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground/70"
                />
                <Button className="px-8 py-4 text-lg">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-muted/20 rounded-xl border border-border/50 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Mail className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10 text-center p-6">
              <BellRing className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Notifications exclusives</h3>
              <p className="text-muted-foreground max-w-md">
                Soyez le premier informé des annonces importantes et des événements clés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Actualites;