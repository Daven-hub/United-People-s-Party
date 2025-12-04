import { Globe } from "lucide-react";
import type { ComponentType } from "react";

export type TopNavItem = {
    label: string;
    href?: string;
    icon?: ComponentType<{ className?: string }>;
    lang: string;
};

export const topNavItems: TopNavItem[] = [
    { label: "EN - English", href: "#", icon: Globe, lang: "en" },
    { label: "FR - Français", href: "#", icon: Globe, lang: "fr" },
];
