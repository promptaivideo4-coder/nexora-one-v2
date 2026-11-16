import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { NexoraLogo } from "../common/NexoraLogo";
import { useCopy } from "../journey/Page";
export function SiteHeader() {
  const c = useCopy();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const links = [
    ["/", c("Home", "Home")],
    ["/for-salons", c("For Salons", "Salon owners")],
    ["/for-customers", c("For Customers", "Customers")],
    ["/pricing", c("Pricing", "Pricing")],
    ["/investors", c("Investors", "Investors")],
  ];
  return (
    <>
      <a href="#main-content" className="skip-link">
        {c("Skip to content", "Content पर जाएँ")}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <NexoraLogo size="sm" showSubtitle={false} />
          <nav
            className="desktop-nav"
            aria-label={c("Main navigation", "मुख्य navigation")}
          >
            {links.map(([to, label]) => (
              <NavLink key={to} end={to === "/"} to={to}>
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="header-tools">
            <LanguageSelector />
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              {open ? c("Close", "बंद करें") : c("Menu", "Menu")}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label={c("Mobile navigation", "Mobile navigation")}
          >
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                end={to === "/"}
                to={to}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
