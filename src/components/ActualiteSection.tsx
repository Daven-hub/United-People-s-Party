import { motion } from "framer-motion";
import { Globe, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const ActualiteSection = () => {
    const { t } = useTranslation();

    const images = [
        "/actualites/1.jpeg",
        "/actualites/2.jpeg",
        "/actualites/3.jpeg",
        "/actualites/4.jpeg",
        "/actualites/5.jpeg",
        "/actualites/6.jpeg",
        "/actualites/7.jpeg",
        "/actualites/8.jpeg",
        "/actualites/9.jpeg",
        "/actualites/10.jpeg",
        "/actualites/11.jpeg",
        "/actualites/12.jpeg",
        "/actualites/13.jpeg",
        "/actualites/14.jpeg",
        "/actualites/15.jpeg"
    ];

    return (
        <section className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-primary/5 px-[6.5%] pt-16 ">
            <img
                src="/pays.png"
                alt="Decorative background"
                className="pointer-events-none absolute top-0 right-0 w-48 md:w-72 opacity-20 blur-sm -translate-x-6 -translate-y-6"
            />

            <div className="relative w-full h-[250px] md:h-full rounded-[5px] overflow-hidden">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    loop
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img}
                                alt={t("actualite.title")}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="flex flex-col">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center w-fit gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-2"
                >
                    <Globe className="w-3 h-3 text-primary" />
                    <span className="text-primary text-xs font-semibold">
                        {t("actualite.badge")}
                    </span>
                </motion.div>

                <div className="flex flex-col gap-3 mt-2">

                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground font-extrabold"
                    >
                        {t("actualite.date")}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]"
                    >
                        {t("actualite.title")}{" "}
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            {t("actualite.subtitle")}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-[.9rem] md:text-[1.1rem] text-primary max-w-3xl mx-auto"
                    >
                        {t("actualite.description")}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-[.9rem] md:text-[1.1rem] text-primary max-w-3xl mx-auto"
                    >
                        {t("actualite.candidature")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: true }}
                        className="space-y-4 mt-4"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-2 rounded-lg mt-1">
                                <Users className="w-5 h-5 text-primary" />
                            </div>
                            <h4 className="font-semibold text-lg">
                                {t("actualite.highlights.politicalStatement")}
                            </h4>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-secondary/10 p-2 rounded-lg mt-1">
                                <Target className="w-5 h-5 text-secondary" />
                            </div>
                            <h4 className="font-semibold text-lg">
                                {t("actualite.highlights.fieldPresence")}
                            </h4>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-accent/10 p-2 rounded-lg mt-1">
                                <Globe className="w-5 h-5 text-accent" />
                            </div>
                            <h4 className="font-semibold text-lg">
                                {t("actualite.highlights.newDynamic")}
                            </h4>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ActualiteSection;
