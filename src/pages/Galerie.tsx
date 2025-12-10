import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight, Download, Eye, Heart, Image, Share } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { galleryData } from '@/data/galleryData';
import { useTranslation } from 'react-i18next';

const GalleryPage = () => {
    const { t } = useTranslation();
    const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };


    const selectedItem = selectedMedia !== null
        ? galleryData.media.find(item => item.id === selectedMedia)
        : null;

    const currentIndex = selectedMedia !== null
        ? galleryData.media.findIndex(item => item.id === selectedMedia)
        : -1;

    const navigateMedia = (direction: 'prev' | 'next') => {
        if (selectedMedia === null) return;
        const newIndex = direction === 'prev'
            ? (currentIndex - 1 + galleryData.media.length) % galleryData.media.length
            : (currentIndex + 1) % galleryData.media.length;
        setSelectedMedia(galleryData.media[newIndex].id);
        setIsPlaying(false);
    };

    const togglePlayPause = () => {
        if (selectedItem?.type === 'video') {
            if (isPlaying) {
                videoRef.current?.pause();
            } else {
                videoRef.current?.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (selectedItem?.type === 'video') {
            setIsPlaying(false);
            setIsMuted(true);
        }
    }, [selectedMedia]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedMedia !== null) {
                if (e.key === 'Escape') setSelectedMedia(null);
                else if (e.key === 'ArrowLeft') navigateMedia('prev');
                else if (e.key === 'ArrowRight') navigateMedia('next');
                else if (e.key === ' ') togglePlayPause();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedMedia, currentIndex, isPlaying]);

    return (
        <>
            <Navigation />
            <head>
                <title>{t("galleries.title")}</title>
                <meta name="description" content={t("galleries.description")} />
            </head>

            <main className="min-h-screen bg-gradient-to-b from-primary/5 to-secondary/90 overflow-hidden relative">
                {/* Hero Section */}
                <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-green-800 px-[6.5%]">
                    <div className="absolute inset-0">
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                            <source src="/images/galerie/vid.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-yellow-800/70 to-transparent" />
                    </div>

                    <div className="h-full relative flex items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-2xl relative">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-6 flex items-center">
                                <div className="h-1 w-12 bg-accent mr-3"></div>
                                <span className="px-4 py-2 bg-secondary text-primary font-bold text-sm">{t("galleries.hero.tag")}</span>
                            </motion.div>

                            <motion.h1 className="text-[2rem] md:text-[4rem] font-bold leading-[1.2] md:leading-[1.1] tracking-tight text-white uppercase"
                                initial={{ y: -30 }} animate={{ y: 0 }} transition={{ delay: 0.2 }}>
                                <span className="block mb-2">{t("galleries.hero.titleLine1")}</span>
                                <span className="text-secondary block mb-2">{t("galleries.hero.titleLine2")}</span>
                            </motion.h1>

                            <motion.div className="bg-primary/20 p-4 border-l-4 border-secondary max-w-xl"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                                <p className="text-white text-sm md:text-base italic">
                                    {t("galleries.hero.quote")}
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
                </section>

                {/* Gallery Content */}
                <section className="py-16 md:py-20 relative z-10 px-[6.5%]">
                    <motion.div className="mb-8" initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-2 mb-6 animate-bounce-horizontal">
                            <Image className="w-5 h-5 text-primary" />
                            <span className="text-primary font-semibold">{t("galleries.content.images")}</span>
                        </div>
                        <motion.h2 className="text-[1.78rem] md:text-[2.8rem] font-bold text-foreground leading-[1.25]">
                            {t("galleries.content.title").split(' en ')[0]} <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">{t("galleries.content.title").split(' en ')[1]}</span>
                        </motion.h2>
                        <p className="text-[.9rem] md:text-[1.1rem] text-primary max-w-3xl ">
                            {t("galleries.content.description")}
                        </p>
                    </motion.div>

                    <motion.div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 md:gap-8" layout>
                        {galleryData.media.map(media => (
                            <motion.div
                                key={media.id}
                                className="mb-6 md:mb-8 break-inside-avoid overflow-hidden shadow-elegant transition-all duration-500 hover:shadow-2xl bg-background border border-secondary-dark/10 group relative"
                                onClick={() => setSelectedMedia(media.id)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                                layoutId={`masonry-${media.id}`}
                            >
                                <div className="relative overflow-hidden">
                                    {media.type === "image" ? (
                                        <img src={media.src} alt={media.alt} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                                    ) : (
                                        <>
                                            <video src={media.src} poster={media.poster} className="w-full h-auto object-cover" muted loop playsInline />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="w-16 h-16 bg-black/50 flex items-center justify-center backdrop-blur-sm">
                                                    <FiPlay className="text-white text-2xl ml-1" />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4">
                                        <h3 className="text-white font-bold text-sm md:text-base">{media.alt}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Media Modal */}
                <AnimatePresence>
                    {selectedMedia !== null && selectedItem && (
                        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                            <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setSelectedMedia(null)} />
                            <button className="absolute top-4 right-4 text-white text-3xl z-50 hover:text-accent transition-colors bg-black/50 p-2 backdrop-blur-sm"
                                onClick={() => setSelectedMedia(null)} aria-label={t("galleries.modal.close")}><FiX /></button>

                            <motion.div className="relative max-w-6xl w-full max-h-[90vh] mx-auto" layoutId={`masonry-${selectedItem.id}`} initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }} transition={{ type: "spring", damping: 25, stiffness: 200, duration: 0.5 }}>
                                {selectedItem.type === 'image' ? (
                                    <motion.img src={selectedItem.src} alt={selectedItem.alt} className="w-full h-full max-h-[70vh] object-contain" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
                                ) : (
                                    <div className="relative">
                                        <motion.video ref={videoRef} src={selectedItem.src} poster={selectedItem.poster} className="w-full max-h-[70vh]" controls={false} muted={isMuted} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <motion.button onClick={togglePlayPause} className={`flex items-center justify-center transition-all ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-80'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={isPlaying ? t("galleries.modal.pause") : t("galleries.modal.play")}>
                                                <div className="w-16 h-16 bg-black/60 flex items-center justify-center backdrop-blur-sm">
                                                    {isPlaying ? <FiPause className="text-white text-2xl" /> : <FiPlay className="text-white text-2xl ml-1" />}
                                                </div>
                                            </motion.button>
                                        </div>
                                        <motion.button onClick={() => setIsMuted(!isMuted)} className="absolute bottom-4 right-4 bg-black/60 p-2 backdrop-blur-sm" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={isMuted ? t("galleries.modal.unmute") : t("galleries.modal.mute")}>
                                            {isMuted ? <FiVolumeX className="text-white text-xl" /> : <FiVolume2 className="text-white text-xl" />}
                                        </motion.button>
                                    </div>
                                )}

                                <motion.div className="bg-secondary-dark/90 text-white p-4 md:p-6 mt-4 backdrop-blur-md" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                                    <h3 className="text-xl md:text-2xl font-bold">{selectedItem.alt}</h3>
                                    <p className="mt-3 text-white/90">{selectedItem.description}</p>
                                </motion.div>
                            </motion.div>

                            {galleryData.media.length > 1 && (
                                <>
                                    <motion.button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 text-white z-10 backdrop-blur-sm"
                                        onClick={() => navigateMedia('prev')} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={t("galleries.modal.previous")}>
                                        <FiChevronLeft className="text-2xl" />
                                    </motion.button>
                                    <motion.button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 p-3 text-white z-10 backdrop-blur-sm"
                                        onClick={() => navigateMedia('next')} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={t("galleries.modal.next")}>
                                        <FiChevronRight className="text-2xl" />
                                    </motion.button>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <Footer />
        </>
    );
};

export default GalleryPage;