"use client";


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export default function CtaSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white text-center">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl font-bold mb-6">
                PRÊT À CHANGER LE CAMEROUN AVEC L'UPP ?
            </motion.h2>


            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-primary">Adhérer</Button>
                <Button variant="outline">Télécharger la charte</Button>
                <Button variant="outline">Faire un Don</Button>
            </div>
        </section>
    );
}