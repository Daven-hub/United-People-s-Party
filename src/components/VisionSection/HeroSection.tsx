"use client";


import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";


export default function HeroSection() {
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    const slideIn = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };


    return (
        <section className="relative bg-gradient-to-r from-primary via-primary-light to-accent text-primary-foreground min-h-[500px] flex items-center px-[6.5%] py-12 overflow-hidden w-full">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/CNGP.png')] bg-repeat"></div>


            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-2/3 w-full">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }} className="border-l-4 border-white pl-6 mb-8">
                            <h1 className="text-[1.5rem] md:text-[3.75rem] font-bold leading-[1.25] md:leading-[1.15] tracking-tight">
                                PARTI DU PEUPLE UNI <br />
                                <span className="text-secondary">POUR UN CAMEROUN NOUVEAU</span>
                            </h1>
                        </motion.div>


                        <motion.p className="text-[0.9rem] md:text-[1.27rem] opacity-95 leading-relaxed max-w-[90%] mb-4" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2, duration: 0.8 }}>
                            « Il est des moments dans l'Histoire où les générations n'ont plus le choix que de se lever. »
                        </motion.p>


                        <div className="w-full flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground font-bold px-8 py-6 text-lg" asChild>
                                <a href="/rejoindre">
                                    Rejoindre l'UPP <ArrowRight className="ml-2 w-7 h-7" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-primary font-bold px-8 py-6 text-lg">
                                <Download className="mr-2 w-7 h-7" /> Télécharger la charte
                            </Button>
                        </div>
                    </div>


                    <div className="md:w-1/3 w-full mt-12 md:mt-0">
                        <motion.img src="/images/galerie/vision.jpg" alt="Vision politique" className="w-full h-auto object-cover border-4 border-white border-t-primary border-b-secondary border-r-accent shadow-lg" initial="hidden" animate="visible" variants={slideIn} transition={{ duration: 0.8 }} />
                    </div>
                </div>
            </div>
        </section>
    );
}