import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  // Fermer avec la touche "Escape"
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 px-[5%] flex items-center justify-center bg-black bg-opacity-65 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto py-6 px-6 md:px-8 relative animate-fadeInScale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Fermer"
        >
          ×
        </button>

        <h2 className="text-lg md:text-2xl text-black font-bold mb-4">
          {t("privacy.title")}
        </h2>

        <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed">

          {/* SECTION 1 */}
          <div className="text-sm">
            <h3 className="font-semibold text-[1rem] md:text-lg mb-1">
              {t("privacy.section1Title")}
            </h3>
            <p>{t("privacy.section1Text")}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {(t("privacy.section1List", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* SECTION 2 */}
          <div className="text-sm">
            <h3 className="font-semibold text-[1rem] md:text-lg mb-1">
              {t("privacy.section2Title")}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {(t("privacy.section2List", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <p className="mt-2">{t("privacy.section2Text")}</p>
          </div>

          {/* SECTION 3 */}
          <div className="text-sm">
            <h3 className="font-semibold text-[1rem] md:text-lg mb-1">
              {t("privacy.section3Title")}
            </h3>
            <p>{t("privacy.section3Text")}</p>
          </div>

          {/* SECTION 4 */}
          <div className="text-sm">
            <h3 className="font-semibold text-[1rem] md:text-lg mb-1">
              {t("privacy.section4Title")}
            </h3>
            <p>
              {t("privacy.section4Text")}
              <br />
              <span className="font-medium">Email : info@upp-ppu.cm</span>
            </p>
          </div>

          {/* SECTION 5 */}
          <div className="text-sm">
            <h3 className="font-semibold text-[1rem] md:text-lg mb-1">
              {t("privacy.section5Title")}
            </h3>
            <p>{t("privacy.section5Text")}</p>
          </div>

          {/* SECTION 6 */}
          <div className="text-sm">
            <h3 className="font-semibold text-[1rem] md:text-lg mb-1">
              {t("privacy.section6Title")}
            </h3>
            <p>{t("privacy.section6Text")}</p>
          </div>

          <p className="text-sm text-gray-500">
            {t("privacy.lastUpdate")} : 21 juillet 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
