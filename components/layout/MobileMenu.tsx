"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/localization/LocaleSwitcher";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const isActive = (path: string) => {
    // Remove locale prefix from pathname for comparison
    const pathWithoutLocale = pathname.replace(/^\/(en|th)/, "") || "/";
    return pathWithoutLocale === path;
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      onClick={onClose}
    >
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Link
          href="/"
          className={cn(
            navigationMenuTriggerStyle(),
            isActive("/") && "bg-accent text-accent-foreground",
          )}
          onClick={onClose}
        >
          {t("home")}
        </Link>
        <Link
          href="/services"
          className={cn(
            navigationMenuTriggerStyle(),
            isActive("/services") && "bg-accent text-accent-foreground",
          )}
          onClick={onClose}
        >
          {t("services")}
        </Link>
        <Link
          href="/contact"
          className={cn(
            navigationMenuTriggerStyle(),
            isActive("/contact") && "bg-accent text-accent-foreground",
          )}
          onClick={onClose}
        >
          {t("contact")}
        </Link>
        <Link
          href="/"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition text-sm font-semibold text-center"
          onClick={onClose}
        >
          {t("login")}
        </Link>
        <Link
          href="/"
          className="bg-slate-100 text-secondary px-4 py-2 rounded-md hover:bg-primary/90 transition text-sm font-semibold text-center"
          onClick={onClose}
        >
          {t("signup")}
        </Link>
        <div className="pt-4 border-t">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
