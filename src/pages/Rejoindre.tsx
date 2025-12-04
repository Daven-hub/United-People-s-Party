import { useRef, useState } from "react";
import { ArrowLeft, Users, Mail, Phone, MapPin, User, Briefcase, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// import angLogo from "@/assets/ang-logo.svg";

const Rejoindre = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    age: "",
    profession: "",
    ville: "",
    region: "",
    motivation: "",
    experience_politique: "",
    competences: "",
    disponibilite: "",
    accepte_charte: false,
    accepte_newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.accepte_charte) {
      toast({
        title: "Erreur",
        description: "Vous devez accepter la charte de l'ANG pour continuer.",
        variant: "destructive"
      });
      return;
    }

    // Pour l'instant, on simule l'envoi
    toast({
      title: "Demande envoyée avec succès !",
      description: "Nous vous contacterons dans les plus brefs délais pour finaliser votre adhésion à l'ANG.",
    });

    // Reset form
    setFormData({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      age: "",
      profession: "",
      ville: "",
      region: "",
      motivation: "",
      experience_politique: "",
      competences: "",
      disponibilite: "",
      accepte_charte: false,
      accepte_newsletter: false
    });
  };

  const regions = [
    "Adamaoua", "Centre", "Est", "Extrême-Nord", "Littoral",
    "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest", "Diaspora"
  ];

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };


  return (
    <>
      <Navigation />
      <section className="relative bg-gradient-hero py-20">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative flex flex-col gap-6 items-center w-full px-[6.5%] text-center">
          <div className="inline-flex items-center gap-3">
            <div>
              <h1 className="text-[1.7rem] md:text-[2.7rem] font-bold text-primary-foreground">
                Rejoignez l'ANG
              </h1>
              <p className="text-[1rem] text-primary-foreground/90">
                Ensemble, transformons le Cameroun
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center text-[.9rem] gap-4 text-primary-foreground/80">
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-1.5">
              <Users className="w-4 h-4" />
              <span>Alliance inclusive</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-1.5">
              <Heart className="w-4 h-4" />
              <span>Engagement citoyen</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-full px-5 py-1.5">
              <MapPin className="w-4 h-4" />
              <span>Cameroun & Diaspora</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-[6.5%] bg-background">
        <div className="mb-5">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-primary">Formulaire d'adhésion</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Remplissez ce formulaire pour rejoindre l'Alliance Nouvelle Génération
                </p>
              </CardHeader>
              <CardContent className="max-md:px-[6%]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Informations personnelles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {/* Formulaire sur 2 colonnes */}
                      <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex max-md:col-span-2 flex-col gap-1.5">
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input
                            id="prenom"
                            value={formData.prenom}
                            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                            required
                          />
                        </div>
                        <div className="flex max-md:col-span-2 flex-col gap-1.5">
                          <Label htmlFor="nom">Nom *</Label>
                          <Input
                            id="nom"
                            value={formData.nom}
                            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                            required
                          />
                        </div>
                        <div className="flex max-md:col-span-2 flex-col gap-1.5">
                          <Label htmlFor="age">Âge</Label>
                          <Input
                            id="age"
                            type="number"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                          />
                        </div>
                        <div className="flex max-md:col-span-2 flex-col gap-1.5">
                          <Label htmlFor="Email">Email *</Label>
                          <Input
                            id="Email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="flex col-span-2 flex-col gap-1.5">
                          <Label htmlFor="name of partis">Nom du parti politique *</Label>
                          <Input
                            id="profession"
                            value={formData.profession}
                            onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                          />
                        </div>
                      </div>

                      {/* Image sur la 3e colonne */}
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="profession">Logo du parti *</Label>
                        <div
                          className="w-full h-full aspect-video bg-white rounded-[5px] overflow-hidden border border-gray-300 cursor-pointer flex items-center justify-center hover:ring-2 hover:ring-primary transition"
                          onClick={handleClick}
                        >
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Logo"
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <span className="text-gray-500">Cliquez pour ajouter un logo</span>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            ref={fileInputRef}
                            className="hidden"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="profession">Profession</Label>
                        <Input
                          id="profession"
                          value={formData.profession}
                          onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="region">Région *</Label>
                        <Select
                          value={formData.region}
                          onValueChange={(value) => setFormData({ ...formData, region: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre région" />
                          </SelectTrigger>
                          <SelectContent>
                            {regions.map((region) => (
                              <SelectItem key={region} value={region}>
                                {region}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <Label htmlFor="ville">Ville *</Label>
                        <Input
                          id="ville"
                          type="text"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                  </div>

                  {/* Engagement et motivation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Votre engagement
                    </h3>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="motivation">Pourquoi souhaitez-vous rejoindre l'ANG ? *</Label>
                      <Textarea
                        id="motivation"
                        rows={4}
                        value={formData.motivation}
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                        placeholder="Décrivez vos motivations et votre vision pour le Cameroun..."
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="competences">Vos compétences et domaines d'expertise</Label>
                      <Textarea
                        id="competences"
                        rows={3}
                        value={formData.competences}
                        onChange={(e) => setFormData({ ...formData, competences: e.target.value })}
                        placeholder="Décrivez vos compétences qui pourraient contribuer à l'ANG..."
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="experience_politique">Expérience politique ou associative</Label>
                      <Textarea
                        id="experience_politique"
                        rows={3}
                        value={formData.experience_politique}
                        onChange={(e) => setFormData({ ...formData, experience_politique: e.target.value })}
                        placeholder="Décrivez votre expérience dans l'engagement politique ou associatif..."
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="disponibilite">Disponibilité pour l'engagement</Label>
                      <Select value={formData.disponibilite} onValueChange={(value) => setFormData({ ...formData, disponibilite: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre niveau de disponibilité" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="temps-plein">Temps plein</SelectItem>
                          <SelectItem value="temps-partiel">Temps partiel</SelectItem>
                          <SelectItem value="weekends">Weekends principalement</SelectItem>
                          <SelectItem value="ponctuel">Participation ponctuelle</SelectItem>
                          <SelectItem value="soutien">Soutien à distance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Acceptation des conditions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="charte"
                        checked={formData.accepte_charte}
                        onCheckedChange={(checked) => setFormData({ ...formData, accepte_charte: checked as boolean })}
                      />
                      <Label htmlFor="charte" className="text-sm leading-relaxed">
                        J'accepte la charte de l'ANG et m'engage à respecter les valeurs de l'Alliance Nouvelle Génération *
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.accepte_newsletter}
                        onCheckedChange={(checked) => setFormData({ ...formData, accepte_newsletter: checked as boolean })}
                      />
                      <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                        J'accepte de recevoir les communications de l'ANG (newsletter, événements, actualités)
                      </Label>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Users className="mr-2 w-5 h-5" />
                    Envoyer ma candidature
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          {/* Sidebar */}
          <div className="flex flex-col gap-6 sticky top-[350px]">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pourquoi nous rejoindre ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Participer au changement</h4>
                    <p className="text-sm text-muted-foreground">Contribuez activement à la transformation du Cameroun</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Développer vos compétences</h4>
                    <p className="text-sm text-muted-foreground">Rejoignez une équipe dynamique et apprenez</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Créer du lien social</h4>
                    <p className="text-sm text-muted-foreground">Rencontrez des citoyens engagés comme vous</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nous contacter</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">info@cng-ngc.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">+237 673 712 522 / +237 694 25 83 89</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Douala, Cameroun</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Rejoindre;