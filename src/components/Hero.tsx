import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RejoindreModal from "./RejoindreModal";

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-r px-[6.5%] flex items-center from-primary via-primary-light to-secondary text-primary-foreground h-[calc(100vh-170px)] overflow-hidden">
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Contenu principal */}
      <div className="w-full h-fit relative md:w-[65%] animate-fadeInUp space-y-3.5">
        <h1 className="text-[1.50rem] md:text-[3.75rem] font-bold leading-[1.25] md:leading-[1.15] tracking-tight">
          {t("hero.welcome")}{" "}
          <TypewriterLoop
            text={t("hero.party")}
            className="text-secondary"
            speed={90}
            pause={1800}
          />
        </h1>

        <p className="text-[0.9rem] md:text-[1.27rem] opacity-95 leading-relaxed animate-fadeInUp [animation-delay:0.6s] max-w-[90%]">
          {t("hero.description")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 pt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secondary justify-center flex items-center rounded-[10px] hover:bg-secondary-dark text-secondary-foreground font-bold px-8 py-2.5 text-[.85rem] md:text-[1rem]"
          >
            {t("hero.join")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground hover:bg-primary-foreground hover:text-secondary-foreground font-semibold text-primary px-8 py-3 md:py-6 text-[.85rem] md:text-[1rem]"
          >
            {t("hero.discover")}
          </Button>
        </div>
      </div>

      {/* Image droite */}
      <img
        src="/UPP.png"
        alt={t("hero.illustrationAlt")}
        className="hidden md:block w-[45%] absolute -right-[1%] -translate-y-1/2 object-contain transform scale-[1.15] duration-[600ms] animate-fadeZoom animate-floatMagic"
      />

      <RejoindreModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;

interface Props {
  text: string;
  speed?: number;
  pause?: number;
  className?: string;
}

export const TypewriterLoop = ({
  text,
  speed = 80,
  pause = 1500,
  className = "",
}: Props) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, pause]);

  return <span className={className}>{displayed}</span>;
};
