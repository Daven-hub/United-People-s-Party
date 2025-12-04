import { Users, Briefcase, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RejoindreSidebar = () => {
    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Pourquoi rejoindre l’UPP ?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-3"><Users /> Participer au changement</div>
                    <div className="flex gap-3"><Briefcase /> Développer vos compétences</div>
                    <div className="flex gap-3"><Heart /> Créer du lien social</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Contact UPP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="flex gap-3"><Mail /> info@upp-cm.org</div>
                    <div className="flex gap-3"><Phone /> +237 673 712 522</div>
                    <div className="flex gap-3"><MapPin /> Douala, Cameroun</div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RejoindreSidebar;
