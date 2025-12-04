import React from "react";
import { useTranslation } from "react-i18next";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-50 px-[6.5%] flex items-center text-black justify-center bg-black bg-opacity-65">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative">
        <button
          className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h1 className="text-2xl font-bold mb-4">
          {t("legal.title")}
        </h1>

        {/* Mentions légales */}
        <section className="mb-6 text-sm">
          <p className="mb-1">
            <strong>{t("legal.siteName")} :</strong> {t("legal.siteValue")}
          </p>
          <p className="mb-1">
            <strong>{t("legal.url")} :</strong> www.cng-ngc.org
          </p>
          <p className="mb-1">
            <strong>{t("legal.editor")} :</strong> Franchise IT
          </p>
          <p className="mb-1">
            <strong>{t("legal.address")} :</strong> Douala, Cameroun
          </p>
          <p className="mb-1">
            <strong>{t("legal.email")} :</strong> info@cng-ngc.org
          </p>
          <p className="mb-1">
            <strong>{t("legal.phone")} :</strong> +237 6 95 43 27 99
          </p>
          <p className="mb-1">
            <strong>{t("legal.publisher")} :</strong> Franchise IT
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-medium mb-2">
            {t("legal.builderTitle")} :
          </h2>

          <p className="mb-1">
            <strong>{t("legal.name")} :</strong> Franchise IT
          </p>
          <p className="mb-1">
            <strong>{t("legal.url")} :</strong> www.franchise-it-tech.com
          </p>
          <p className="mb-1">
            <strong>{t("legal.editor")} :</strong> Franchise IT
          </p>
          <p className="mb-1">
            <strong>{t("legal.address")} :</strong> Montréal, Canada
          </p>
          <p className="mb-1">
            <strong>{t("legal.contact")} :</strong> info@franchise-it-tech.com
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-6">
          {t("legal.lastUpdate")} : 21 juillet 2025
        </p>
      </div>
    </div>
  );
};

export default LegalModal;
