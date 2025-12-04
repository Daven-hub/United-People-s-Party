import { motion } from 'framer-motion';
import { Shield, Heart, Users, Lightbulb, Target, Globe, ShieldCheck, Star, Layers, Flag } from 'lucide-react';


export const values = [
    {
        icon: ShieldCheck,
        title: "Intégrité",
        description: "Nous portons une éthique de vérité, de justice et de loyauté. Refusant les compromissions et la duplicité, nous incarnons une politique honnête, cohérente et exemplaire, où la parole donnée a du poids et l’intérêt collectif prime."
    },
    {
        icon: Star,
        title: "Discipline",
        description: "Nous croyons en la rigueur, le respect des règles communes et l’exigence personnelle. La discipline forge notre sérieux, notre constance et notre responsabilité dans l’action politique."
    },
    {
        icon: Layers,
        title: "Excellence",
        description: "Nous refusons la médiocrité. Par le travail bien fait, la compétence et le sérieux, nous aspirons à redonner à la politique sa crédibilité et sa capacité à transformer le pays."
    },
    {
        icon: Flag,
        title: "Patriotisme",
        description: "Notre loyauté va d’abord au peuple camerounais. Nous servons notre pays avec dignité, indépendance et ambition, au service de l’intérêt général."
    },
    {
        icon: Users,
        title: "Solidarité Générationnelle",
        description: "Nous avançons ensemble. Notre force réside dans l’unité, la confiance mutuelle et la volonté de créer des opportunités pour tous les jeunes, en refusant l’isolement et la compétition stérile."
    },
    {
        icon: Globe,
        title: "Engagement Collectif",
        description: "Nous croyons en une transformation portée par une jeunesse organisée, consciente et solidaire. Ensemble, nous construisons une relève politique crédible et durable pour le Cameroun."
    }
];


export const Valeurs = () => {
    return (
        <section className="relative py-28 px-6 overflow-hidden bg-gradient-to-b from-background/95 to-muted/5">
            {/* Fond texturé */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/texture-politique.png')] bg-repeat" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
            </div>

            {/* Éléments décoratifs animés */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
            />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                        <span className="relative inline-block">
                            Valeurs Fondamentales
                            <motion.span 
                                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                            />
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8 leading-relaxed">
                        Les piliers philosophiques qui structurent notre vision pour une nouvelle gouvernance camerounaise
                    </p>
                </motion.div>

                <div className="grid gap-16 md:gap-24">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="grid md:grid-cols-12 gap-8 items-start"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="md:col-span-2 flex justify-center md:justify-end">
                                <motion.div
                                    className="p-5 bg-background border border-muted/20 shadow-sm hover:shadow-md transition-all duration-500"
                                    whileHover={{ 
                                        rotate: 5,
                                        backgroundColor: 'hsl(var(--primary)/0.1)'
                                    }}
                                >
                                    <value.icon className="w-10 h-10 text-primary" />
                                </motion.div>
                            </div>
                            
                            <div className="md:col-span-10">
                                <motion.h3 
                                    className="text-3xl font-bold text-foreground mb-6 relative inline-block"
                                    whileHover={{ color: 'hsl(var(--primary))' }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {value.title}
                                    <motion.span 
                                        className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    />
                                </motion.h3>
                                <motion.p 
                                    className="text-lg text-muted-foreground leading-relaxed mb-6"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    {value.description}
                                </motion.p>
                                <motion.div
                                    className="h-px bg-gradient-to-r from-transparent via-muted/30 to-transparent"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ duration: 1.5 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Séparateur animé en bas */}
            <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
            />
        </section>
    );
};