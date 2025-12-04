"use client";


import { motion } from "framer-motion";
import { Users, BarChart2, BookOpen, Flag } from "lucide-react";


export default function VisionStrategiqueSection() {
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };


    return (
        <section className="relative py-16 bg-gray-50 px-[6.5%]">
            <div className="container mx-auto relative z-10">
                <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
                        <Flag className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">NOTRE PROJET DE SOCIÉTÉ</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold">NOTRE VISION POLITIQUE</h2>
                </motion.div>


                <div className="grid md:grid-cols-3 gap-8">
                    {[{ title: "GOUVERNANCE", icon: Users }, { title: "STRATÉGIE", icon: BarChart2 }, { title: "FORMATION", icon: BookOpen }].map((item, i) => (
                        <motion.div key={i} className="bg-white p-6 shadow" initial="hidden" whileInView="visible" variants={fadeIn}>
                            <item.icon className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold text-xl">{item.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}