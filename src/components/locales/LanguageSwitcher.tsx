import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { topNavItems } from "./topNavItems";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const currentItem =
        topNavItems.find((item) => item.lang === i18n.language) ||
        topNavItems[0];

    return (
        <div className="relative">
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                }}
                className={`flex items-center gap-1 text-primary hover:text-secondary transition-colors font-medium`}
            >
                {currentItem.icon && <currentItem.icon className="w-4 h-4" />}
                {currentItem.label}
                <ChevronDown className="w-3 h-3" />
            </a>

            {open && (
                <div className="absolute right-0 mt-2 min-w-[140px] flex flex-col rounded-md border bg-background shadow-md">
                    {topNavItems.map((item) => (
                        <a
                            key={item.label}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                i18n.changeLanguage(item.lang);
                                setOpen(false);
                            }}
                            className="flex items-center gap-1 px-3 py-2 text-sm text-primary hover:text-secondary transition-colors"
                        >
                            {item.icon && <item.icon className="w-4 h-4" />}
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
