import { useState } from "react";
import axios from "axios";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

// Configuration API
const apiClient = axios.create({
  baseURL: "https://api.ang-agc.org",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interfaces
export interface ContactFormData {
  nom: string;
  email: string;
  message: string;
  sujet: string;
  telephone: string;
}

export interface ApiResponse {
  status: "success" | "error";
  message: string;
  data?: any;
}

// Service de contacts
export const contactsService = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post("/api/membership/apply", formData);
    return {
      status: "success",
      message: response.data.message || "Demande envoyée avec succès!",
      data: response.data,
    };
  } catch (err: any) {
    if (err.response) {
      return {
        status: "error",
        message: err.response.data?.message || "Erreur lors de la soumission du formulaire",
      };
    } else if (err.request) {
      return {
        status: "error",
        message: "Problème de connexion. Veuillez vérifier votre connexion internet.",
      };
    } else {
      return {
        status: "error",
        message: "Erreur de configuration. Veuillez réessayer plus tard.",
      };
    }
  }
};

// Validation des données
export const validateRejoindreData = (formData: ContactFormData): string[] => {
  const errors: string[] = [];
  if (!formData.nom) errors.push("Le nom est requis");
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) errors.push("Un email valide est requis");
  if (!formData.message) errors.push("Le message est requis");
  if (!formData.sujet) errors.push("Le sujet est requis");
  if (!formData.telephone) errors.push("Le telephone est requis");
  return errors;
};

// Composant principal
const Contact = () => {
  const { t } = useTranslation();

  // États du formulaire
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    email: "",
    message: "",
    sujet: "",
    telephone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const { toast } = useToast();

  // Données statiques
  const contactInfo = [
    {
      icon: MapPin,
      title: t("contacts.info.addressTitle"),
      details: [t("contacts.info.addressDetails")],
    },
    {
      icon: Phone,
      title: t("contacts.info.phoneTitle"),
      details: [t("contacts.info.phoneDetails1"), t("contacts.info.phoneDetails2")],
    },
    {
      icon: Mail,
      title: t("contacts.info.emailTitle"),
      details: [t("contacts.info.emailDetails")],
    },
  ];

  // Gestionnaires d'événements
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, sujet: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const validationErrors = validateRejoindreData(formData);
    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        toast({
          title: t("contacts.form.errorTitle"),
          description: error,
          variant: "destructive",
        });
      });
      return;
    }

    if (!consent) {
      toast({
        title: t("contacts.form.errorTitle"),
        description: t("contacts.form.errorConsent"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await contactsService(formData);
      if (result.status === "success") {
        toast({
          title: t("contacts.form.successTitle"),
          description: result.message,
        });
        setFormData({
          nom: "",
          email: "",
          message: "",
          sujet: "",
          telephone: "",
        });
        setConsent(false);
      } else {
        toast({
          title: t("contacts.form.errorTitle"),
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("contacts.form.errorTitle"),
        description: t("contacts.form.errorUnexpected"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-[6.5%] bg-gradient-hero text-white">
        <div className="w-full text-center flex flex-col gap-1 md:gap-3">
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-up">{t("contacts.hero.title")}</h1>
          <p className="text-[.9rem] md:text-lg leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t("contacts.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Informations de contacts */}
      <section className="py-14 px-[6.5%]">
        <div className="text-center">
          <h2 className="text-[1.3rem] md:text-[2.2rem] font-bold text-foreground mb-4">{t("contacts.info.title")}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-secondary/70" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{info.title}</h3>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm md:text-lg text-primary mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Formulaire de contacts */}
      <section className="py-14 space-y-5 px-[6.5%] bg-muted/30">
        <div className="text-center space-y-2">
          <h2 className="text-[1.4rem] md:text-[2.2rem] font-bold text-foreground">{t("contacts.form.title")}</h2>
          <p className="text-[.9rem] md:text-lg text-primary">{t("contacts.form.subtitle")}</p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-8 max-md:px-5">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contacts.form.nom")} *</label>
                  <Input
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder={t("contacts.form.nomPlaceholder")}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contacts.form.email")} *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t("contacts.form.emailPlaceholder")}
                    className="w-full"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contacts.form.telephone")} *</label>
                  <Input
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder={t("contacts.form.telephonePlaceholder")}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contacts.form.sujet")} *</label>
                  <Select value={formData.sujet} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder={t("contacts.form.sujetPlaceholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Adhésion au Parti du Peuple Uni">{t("contacts.form.sujet1")}</SelectItem>
                      <SelectItem value="Question sur le programme">{t("contacts.form.sujet2")}</SelectItem>
                      <SelectItem value="Proposition de collaboration">{t("contacts.form.sujet3")}</SelectItem>
                      <SelectItem value="Demande de presse">{t("contacts.form.sujet4")}</SelectItem>
                      <SelectItem value="Autre">{t("contacts.form.sujet5")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("contacts.form.message")} *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t("contacts.form.messagePlaceholder")}
                  rows={7}
                  className="w-full"
                  required
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="rounded"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                <label htmlFor="consent" className="text-sm text-primary">
                  {t("contacts.form.consent")}
                </label>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto px-8" disabled={isSubmitting}>
                {isSubmitting ? t("contacts.form.sending") : t("contacts.form.submit")}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Réseaux Sociaux */}
      <section className="py-14 px-[6.5%] text-center bg-white">
        <h2 className="text-[1.5rem] md:text-[2.2rem] font-bold text-foreground mb-2.5">{t("contacts.social.title")}</h2>
        <p className="text-[.9rem] md:text-lg text-primary mb-7">{t("contacts.social.subtitle")}</p>

        <div className="flex justify-center gap-6">
          <Button size="lg" variant="outline" className="group flex items-center">
            <Facebook className="w-5 h-5 md:mr-2 group-hover:text-primary" />
            <span className="hidden md:block">Facebook</span>
          </Button>

          <Button size="lg" variant="outline" className="group flex items-center">
            <Linkedin className="w-5 h-5 md:mr-2 group-hover:text-primary" />
            <span className="hidden md:block">Linkedin</span>
          </Button>

          <Button size="lg" variant="outline" className="group flex items-center">
            <Instagram className="w-5 h-5 md:mr-2 group-hover:text-primary" />
            <span className="hidden md:block">Instagram</span>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
