import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function useCopy() {
  const { i18n } = useTranslation();
  return (en: string, hi: string) =>
    i18n.resolvedLanguage?.startsWith("hi") ? hi : en;
}
export function Page({ children }: { children: ReactNode }) {
  return <div className="journey-page">{children}</div>;
}
export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="journey-section">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
export function Hero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="journey-section journey-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="hero-description">{description}</p>
      {children}
    </section>
  );
}
export function Action({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={`journey-button ${secondary ? "secondary" : ""}`} to={to}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
export function Card({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article id={id} className="journey-card" style={{ scrollMarginTop: 110 }}>
      <h3>{title}</h3>
      {children}
    </article>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq-list">
      {items.map(({ q, a }) => (
        <details key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function NextStep({ investor = false }: { investor?: boolean }) {
  const c = useCopy();
  return (
    <Section
      title={
        investor
          ? c(
              "Review the product. Then discuss the business.",
              "पहले product देखें। फिर business पर बात करें।",
            )
          : c("Start with a walkthrough.", "शुरुआत एक demo से करें।")
      }
    >
      <p>
        {c(
          "Choose a demo or contact the team with your questions.",
          "Demo चुनें या अपने सवालों के साथ team से संपर्क करें।",
        )}
      </p>
      <div className="actions">
        <Action
          to={investor ? "/contact?interest=investor" : "/for-salons#demo"}
        >
          {investor
            ? c("Discuss investment", "Investment पर बात करें")
            : c("Try the salon demo", "Salon demo देखें")}
        </Action>
        <Action to="/contact" secondary>
          {c("Contact Nexora", "Nexora से संपर्क करें")}
        </Action>
      </div>
    </Section>
  );
}
