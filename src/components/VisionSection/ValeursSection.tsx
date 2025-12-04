"use client";


import { motion } from "framer-motion";
import { Shield, Clock, TrendingUp, Heart, Users, Flag } from "lucide-react";


export default function ValeursSection() {
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };


    const values = [
        { title: "Intégrité", icon: Shield },
        { title: "Discipline", icon: Clock },
        { title: "Excellence", icon: TrendingUp },
        { title: "Patriotisme", icon: Heart },
        { title: "Solidarité", icon: Users }
    ];


    return (
        <section className="py-20 bg-white px-[6.5%]">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeIn}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border rounded-full px-6 py-2 mb-6">
                    <Flag className="w-5 h-5 text-primary" /> NOS VALEURS
                </div>
                <h2 className="text-4xl font-bold">LES VALEURS DU PARTI DU PEUPLE UNI</h2>
            </motion.div>


            <div className="grid md:grid-cols-3 gap-8">
                {values.map((v, i) => (
                    <motion.div key={i} className="p-6 border shadow" initial="hidden" whileInView="visible" variants={fadeIn}>
                        <v.icon className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-bold">{v.title}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}