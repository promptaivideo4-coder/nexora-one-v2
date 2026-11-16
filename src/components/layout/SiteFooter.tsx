import { Link } from "react-router-dom";
import { useCopy } from "../journey/Page";
import { FOOTER_SECTIONS } from "../../data/navigation";
export function SiteFooter() {
  const c = useCopy();
  return (
    <footer className="site-footer">
      <div>
        <strong>NEXORA ONE</strong>
        <p>
          {c(
            "Salon tools and customer booking. Beauty first.",
            "Salon tools और customer booking। शुरुआत Beauty से।",
          )}
        </p>
        <a href={`mailto:${FOOTER_SECTIONS.contactEmail}`}>
          {FOOTER_SECTIONS.contactEmail}
        </a>
      </div>
      <nav aria-label={c("Company and resources", "Company और resources")}>
        <Link to="/contact">{c("Contact", "संपर्क")}</Link>
        <Link to="/about">{c("About & founder", "About और founder")}</Link>
        <Link to="/products">{c("Demos & status", "Demos और status")}</Link>
        <Link to="/contact?interest=partner">{c("Partners", "Partners")}</Link>
        <Link to="/verticals">{c("Roadmap", "Roadmap")}</Link>
        <Link to="/market-research">
          {c("Research snapshot", "Research snapshot")}
        </Link>
        <Link to="/investor-guide">
          {c("Investor resource", "Investor resource")}
        </Link>
      </nav>
      <nav aria-label={c("Policies and support", "Policies और support")}>
        {FOOTER_SECTIONS.policies.map((item) => (
          <Link key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p className="small-note">
        © {new Date().getFullYear()} Nexora One.{" "}
        {c(
          "Demos and proposals are labeled separately from verified results.",
          "Demos और proposals को verified results से अलग दिखाया गया है।",
        )}
      </p>
    </footer>
  );
}
