import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
export function Layout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.resolvedLanguage || "en";
  }, [i18n.resolvedLanguage]);
  useEffect(() => {
    let frame = requestAnimationFrame(() => {
      let id = "";
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        id = "";
      }
      const target = id ? document.getElementById(id) : null;
      if (target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
      if (!hash)
        document.getElementById("main-content")?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return (
    <div className="site-shell">
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
