import { useState } from "react";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { RejoindreFormData, RejoindreService, validateRejoindreData } from "@/services/RejointService";

const regions = [
    "Adamaoua", "Centre", "Est", "Extrême-Nord", "Littoral",
    "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest", "Diaspora"
];

const RejoindreForm = ({ onClose }: { onClose: () => void }) => {
    const { toast } = useToast();
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const errors = validateRejoindreData(formData);

        if (errors.length > 0) {
            toast({ title: "Erreur", description: errors.join(", "), variant: "destructive" });
            setIsSubmitting(false);
            return;
        }

        if (!formData.accepte_charte) {
            toast({
                title: "Erreur",
                description: "Vous devez accepter la charte de l’UPP.",
                variant: "destructive"
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await RejoindreService(formData);

            if (result.status === "success") {
                toast({
                    title: "Candidature envoyée !",
                    description: "Nous vous contacterons très bientôt pour finaliser votre adhésion à l’UPP.",
                });

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

                onClose();
            } else {
                toast({ title: "Erreur", description: result.message, variant: "destructive" });
            }
        } catch {
            toast({ title: "Erreur", description: "Erreur serveur", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Formulaire d’adhésion au Parti du Peuple Uni</CardTitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input placeholder="Prénom" value={formData.prenom} onChange={(e) => setFormData({ ...formData, prenom: e.target.value })} />
                    <Input placeholder="Nom" value={formData.nom} onChange={(e) => setFormData({ ...formData, nom: e.target.value })} />
                    <Input placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <Input placeholder="Téléphone" value={formData.telephone} onChange={(e) => setFormData({ ...formData, telephone: e.target.value })} />

                    <Select value={formData.region} onValueChange={(value) => setFormData({ ...formData, region: value })}>
                        <SelectTrigger><SelectValue placeholder="Région" /></SelectTrigger>
                        <SelectContent>
                            {regions.map(region => (
                                <SelectItem key={region} value={region}>{region}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Textarea placeholder="Motivation" value={formData.motivation} onChange={(e) => setFormData({ ...formData, motivation: e.target.value })} />

                    <div className="flex items-center space-x-2">
                        <Checkbox checked={formData.accepte_charte} onCheckedChange={(checked) => setFormData({ ...formData, accepte_charte: checked as boolean })} />
                        <Label>J’accepte la charte de l’UPP</Label>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        <Users className="mr-2" />
                        {isSubmitting ? "Envoi..." : "Envoyer ma candidature"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default RejoindreForm;
