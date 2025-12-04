import { useRef, useState } from "react";
import { ArrowLeft, Users, Mail, Phone, MapPin, User, Briefcase, Heart, X } from "lucide-react";
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
import { RejoindreFormData, RejoindreService, validateRejoindreData } from "@/services/RejointService";
import { useTranslation } from "react-i18next";

interface RejoindreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RejoindreModal = ({ isOpen, onClose }: RejoindreModalProps) => {
    const { toast } = useToast();
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<RejoindreFormData>({
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

    const regions = [
        "Adamaoua", "Centre", "Est", "Extrême-Nord", "Littoral",
        "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest", "Diaspora"
    ];

    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validation des données
        const errors = validateRejoindreData(formData);
        if (errors.length > 0) {
            toast({
                title: t("rejoindre.validationErrors.requiredFields"),
                description: errors.join(", "),
                variant: "destructive"
            });
            setIsSubmitting(false);
            return;
        }

        if (!formData.accepte_charte) {
            toast({
                title: t("rejoindre.error.title"),
                description: t("rejoindre.validationErrors.acceptCharte"),
                variant: "destructive"
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Appel du service Axios
            const result = await RejoindreService(formData);

            if (result.status === 'success') {
                toast({
                    title: t("rejoindre.success.title"),
                    description: t("rejoindre.success.description"),
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

                // Fermer le modal après soumission
                onClose();
            } else {
                toast({
                    title: t("rejoindre.error.title"),
                    description: result.message,
                    variant: "destructive"
                });
            }
        } catch (error) {
            toast({
                title: t("rejoindre.error.unexpected"),
                description: t("rejoindre.error.description"),
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Fermer le modal si on clique à l'extérieur du contenu
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Si le modal n'est pas ouvert, ne rien afficher
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-xl animate-scale-in">
                {/* Header du modal */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
                    <h2 className="text-xl font-bold">{t("rejoindre.title")}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-primary-foreground/20 transition-colors"
                        aria-label={t("rejoindre.close")}
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Contenu du modal */}
                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Form */}
                        <div className="lg:col-span-2">
                            <Card className="shadow-elegant">
                                <CardHeader>
                                    <CardTitle className="text-xl md:text-2xl text-primary">{t("rejoindre.formTitle")}</CardTitle>
                                    <p className="text-sm text-primary">
                                        {t("rejoindre.formDescription")}
                                    </p>
                                </CardHeader>
                                <CardContent className="max-md:px-[6%]">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Informations personnelles */}
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                                                {t("rejoindre.personalInfo")}
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                                {/* Formulaire sur 2 colonnes */}
                                                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="flex max-md:col-span-2 flex-col gap-1.5">
                                                        <Label htmlFor="prenom">{t("rejoindre.firstName")}</Label>
                                                        <Input
                                                            id="prenom"
                                                            value={formData.prenom}
                                                            onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="flex max-md:col-span-2 flex-col gap-1.5">
                                                        <Label htmlFor="nom">{t("rejoindre.lastName")}</Label>
                                                        <Input
                                                            id="nom"
                                                            value={formData.nom}
                                                            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="flex max-md:col-span-2 flex-col gap-1.5">
                                                        <Label htmlFor="age">{t("rejoindre.age")}</Label>
                                                        <Input
                                                            id="age"
                                                            type="number"
                                                            min="0"
                                                            value={formData.age}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                // Convertir les valeurs négatives en valeur absolue
                                                                if (value !== "" && parseInt(value) < 0) {
                                                                    setFormData({ ...formData, age: Math.abs(parseInt(value)).toString() });
                                                                } else {
                                                                    setFormData({ ...formData, age: value });
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="flex max-md:col-span-2 flex-col gap-1.5">
                                                        <Label htmlFor="Email">{t("rejoindre.email")}</Label>
                                                        <Input
                                                            id="Email"
                                                            type="email"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <Label htmlFor="telephone">{t("rejoindre.phone")}</Label>
                                                    <Input
                                                        id="telephone"
                                                        value={formData.telephone}
                                                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <Label htmlFor="profession">{t("rejoindre.profession")}</Label>
                                                    <Input
                                                        id="profession"
                                                        value={formData.profession}
                                                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="flex flex-col gap-1.5">
                                                    <Label htmlFor="region">{t("rejoindre.region")}</Label>
                                                    <Select
                                                        value={formData.region}
                                                        onValueChange={(value) => setFormData({ ...formData, region: value })}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue placeholder={t("rejoindre.selectRegion")} />
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
                                                    <Label htmlFor="ville">{t("rejoindre.city")}</Label>
                                                    <Input
                                                        id="ville"
                                                        type="text"
                                                        value={formData.ville}
                                                        onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Engagement et motivation */}
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                                                {t("rejoindre.engagement")}
                                            </h3>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="motivation">{t("rejoindre.motivation")}</Label>
                                                <Textarea
                                                    id="motivation"
                                                    rows={4}
                                                    value={formData.motivation}
                                                    onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                                                    placeholder={t("rejoindre.motivationPlaceholder")}
                                                    required
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="competences">{t("rejoindre.skills")}</Label>
                                                <Textarea
                                                    id="competences"
                                                    rows={3}
                                                    value={formData.competences}
                                                    onChange={(e) => setFormData({ ...formData, competences: e.target.value })}
                                                    placeholder={t("rejoindre.skillsPlaceholder")}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="experience_politique">{t("rejoindre.politicalExperience")}</Label>
                                                <Textarea
                                                    id="experience_politique"
                                                    rows={3}
                                                    value={formData.experience_politique}
                                                    onChange={(e) => setFormData({ ...formData, experience_politique: e.target.value })}
                                                    placeholder={t("rejoindre.politicalExperiencePlaceholder")}
                                                />
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="disponibilite">{t("rejoindre.availability")}</Label>
                                                <Select value={formData.disponibilite} onValueChange={(value) => setFormData({ ...formData, disponibilite: value })}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder={t("rejoindre.selectAvailability")} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="temps-plein">{t("rejoindre.availabilityOptions.fullTime")}</SelectItem>
                                                        <SelectItem value="temps-partiel">{t("rejoindre.availabilityOptions.partTime")}</SelectItem>
                                                        <SelectItem value="weekends">{t("rejoindre.availabilityOptions.weekends")}</SelectItem>
                                                        <SelectItem value="ponctuel">{t("rejoindre.availabilityOptions.occasional")}</SelectItem>
                                                        <SelectItem value="soutien">{t("rejoindre.availabilityOptions.remote")}</SelectItem>
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
                                                    {t("rejoindre.acceptCharte")}
                                                </Label>
                                            </div>

                                            <div className="flex items-center space-x-2">
                                                <Checkbox
                                                    id="newsletter"
                                                    checked={formData.accepte_newsletter}
                                                    onCheckedChange={(checked) => setFormData({ ...formData, accepte_newsletter: checked as boolean })}
                                                />
                                                <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                                                    {t("rejoindre.acceptNewsletter")}
                                                </Label>
                                            </div>
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                t("rejoindre.submitting")
                                            ) : (
                                                <>
                                                    <Users className="mr-2 w-5 h-5" />
                                                    {t("rejoindre.submit")}
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="flex flex-col gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">{t("rejoindre.whyJoin")}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Users className="w-4 h-4 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{t("rejoindre.whyJoinItems.change.title")}</h4>
                                            <p className="text-sm text-primary">{t("rejoindre.whyJoinItems.change.description")}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Briefcase className="w-4 h-4 text-secondary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{t("rejoindre.whyJoinItems.skills.title")}</h4>
                                            <p className="text-sm text-primary">{t("rejoindre.whyJoinItems.skills.description")}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Heart className="w-4 h-4 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{t("rejoindre.whyJoinItems.social.title")}</h4>
                                            <p className="text-sm text-primary">{t("rejoindre.whyJoinItems.social.description")}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">{t("rejoindre.contact")}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-4 h-4 text-secondary" />
                                        <span className="text-sm">{t("rejoindre.emailContact")}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-4 h-4 text-secondary" />
                                        <span className="text-sm">{t("rejoindre.phoneContact")}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-4 h-4 text-secondary" />
                                        <span className="text-sm">{t("rejoindre.address")}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RejoindreModal;