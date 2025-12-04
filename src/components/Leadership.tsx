import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Leadership = () => {
    const { t } = useTranslation();

    const leaders = t('leadership.leaders', { returnObjects: true }) as {
        name: string;
        position: string;
        description: string;
        image: string;
    }[];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    return (
        <motion.section
            className="relative overflow-hidden py-16 border-t border-b border-muted/20"
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={containerVariants}
        >
            {/* Image de fond animée */}
            <motion.div
                className="absolute inset-0 z-0 opacity-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
            >
                <div
                    className="w-full h-full bg-[url('/UPP.png')] bg-repeat"
                    style={{ backgroundSize: '800px', backgroundBlendMode: 'overlay' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
            </motion.div>

            {/* Contenu principal */}
            <div className="container relative z-10">
                <motion.div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <motion.span
                            className="h-px w-16 bg-muted-foreground/30"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                            {t('leadership.sectionLabel')}
                        </span>
                        <motion.span
                            className="h-px w-16 bg-muted-foreground/30"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('leadership.title', {
                            highlight: (text: string) => (
                                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">{text}</span>
                            )
                        })}
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {t('leadership.subtitle')}
                    </motion.p>
                </motion.div>

                {/* Carrousel */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet bg-muted-foreground/30',
                        bulletActiveClass: 'swiper-pagination-bullet-active bg-primary'
                    }}
                    autoplay={{ delay: 7000, pauseOnMouseEnter: true }}
                    loop
                >
                    {leaders.map((leader, index) => (
                        <SwiperSlide key={index} className="pb-8">
                            <motion.div className="relative bg-background border border-muted/20 shadow-sm h-full mx-1 flex flex-col">
                                <motion.div className="w-full h-64 overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    <motion.img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    />
                                </motion.div>

                                <div className="p-5 text-center flex flex-col flex-grow border-t border-muted/10">
                                    <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-1">{leader.name}</h3>
                                    <p className="text-primary font-medium mb-3 text-xs uppercase tracking-wider">{leader.position}</p>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">{leader.description}</p>
                                    <motion.button
                                        className="mt-2 text-xs font-medium text-primary hover:text-primary/80 flex items-center justify-center gap-1 mx-auto transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {t('leadership.viewProfile')}
                                        <motion.svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-arrow-right"
                                            animate={{ x: [0, 3, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                                        >
                                            <path d="M5 12h14" />
                                            <path d="m12 5 7 7-7 7" />
                                        </motion.svg>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.section>
    );
};
