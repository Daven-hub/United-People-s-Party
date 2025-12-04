import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

const SlimLanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: "fr", label: "FR", flag: "🇫🇷" },
        { code: "en", label: "EN", flag: "🇬🇧" },
    ];

    useEffect(() => {
        setCurrentLang(i18n.language);
    }, [i18n.language]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setCurrentLang(lang);
        setOpen(false);
    };

    const activeLang = languages.find((l) => l.code === currentLang) || languages[0];

    return (
        <div
            ref={dropdownRef}
            className="fixed top-1/3 right-0 z-[1000] flex flex-col items-end"
        // style={{ right: '6.5%' }}
        >
            {open && (
                <div className="mb-1 w-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-l-md overflow-hidden">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full py-1.5 text-center text-xs font-medium transition-colors ${lang.code === currentLang
                                ? "bg-primary text-white"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}

            <button
                onClick={() => setOpen(!open)}
                className="w-7 h-7 flex items-center justify-center bg-primary hover:bg-primary/90 text-white text-xs font-medium rounded-l-sm shadow-sm"
                aria-label="Changer de langue"
            >
                {activeLang.code.toUpperCase()}
            </button>
        </div>
    );
};

export default SlimLanguageSwitcher;