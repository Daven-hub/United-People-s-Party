import { Flag } from "lucide-react";
import { useTranslation } from "react-i18next";

const Gallery: React.FC = () => {
    const { t } = useTranslation();

    const images = t("gallery.items", { returnObjects: true }) as { src: string; alt: string; caption: string; height: string; mt?: string }[];

    return (
        <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border-2 border-white ${img.mt || ""}`}
                        style={{ height: img.height }}
                    >
                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                        {img.caption && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <span className="text-white font-medium">{img.caption}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white border-2 border-primary/30 rounded-full p-4 shadow-lg animate-pulse">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Flag className="w-8 h-8 text-primary" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;
