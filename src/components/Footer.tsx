import { useState } from "react";
import { Mail, MapPin, Phone, Facebook, Linkedin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LegalModal from "./modal/legalModal";
import PrivacyPolicyModal from "./modal/Politique";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary-light to-secondary/50 text-primary-foreground pt-14 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      {/* <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div> */}

      <div className="relative w-full px-[6.5%]">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-10">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <img
                src="/UPP.png"
                alt="UPP Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/90">
                  {t("footer.excellenceIntegrity")}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                size="sm"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 w-12 h-12 p-0"
              >
                <Facebook className="w-5 h-5" />
              </Button>

              <Button
                size="sm"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 w-12 h-12 p-0"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl mb-5 flex items-center gap-2">
              {t("footer.navigation")}
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 duration-300 block"
                >
                  {t("footer.home")}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 duration-300 block"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 duration-300 block"
                >
                  {t("footer.program")}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 duration-300 block"
                >
                  {t("footer.news")}
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors hover:translate-x-1 duration-300 block"
                >
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-xl mb-4 flex items-center gap-2">
              {t("footer.contact")}
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-primary-foreground">
                    {t("footer.locationCity")}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {t("footer.locationDetails")}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-primary-foreground">
                    info@upp.cm
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {t("footer.emailOfficial")}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-medium text-primary-foreground">
                    +237 673 712 522 / +237 694 25 83 89
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {t("footer.hours")}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-5 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div className="text-primary-foreground/90 flex flex-col gap-1.5 text-center md:text-left">
              <div className="font-medium text-sm">
                © 2025 {t("footer.uppParty")}
              </div>
              <span className="text-[.8rem]">
                {t("footer.poweredBy")}{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-blue-700"
                  href="https://franchise-it-tech.com/"
                >
                  Franchise IT
                </a>
              </span>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <div
                onClick={() => setShowModal(true)}
                className="hover:text-secondary cursor-pointer transition-colors"
              >
                {t("footer.privacyPolicy")}
              </div>

              <div
                onClick={() => setIsModalOpen(true)}
                className="hover:text-secondary cursor-pointer transition-colors"
              >
                {t("footer.legalNotice")}
              </div>
            </div>
          </div>

          <LegalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
          <PrivacyPolicyModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
