"use client";


import { motion } from "framer-motion";


export default function ComparaisonSection() {
    return (
        <section className="py-20 bg-gray-50 px-[6.5%]">
            <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <h2 className="text-4xl font-bold">UNE NOUVELLE FAÇON DE FAIRE DE LA POLITIQUE</h2>
            </motion.div>


            <div className="grid md:grid-cols-3 gap-8">
                {["Politique Traditionnelle", "Approche UPP", "Résultats Attendus"].map((title, i) => (
                    <div key={i} className="bg-white p-6 shadow">
                        <h3 className="font-bold mb-4">{title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}