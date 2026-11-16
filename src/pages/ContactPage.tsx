import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Page, Hero, Section, useCopy } from "../components/journey/Page";
import { FOOTER_SECTIONS } from "../data/navigation";
const interests = [
  "salon",
  "customer",
  "pricing",
  "investor",
  "partner",
  "support",
] as const;
export function ContactPage() {
  const c = useCopy();
  const [params] = useSearchParams();
  const initial = params.get("interest");
  const [interest, setInterest] = useState<string>(
    interests.includes(initial as (typeof interests)[number])
      ? initial!
      : "salon",
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const body = () =>
    `Name: ${name.trim()}\nReply email: ${email.trim()}\nInterest: ${interest}\n\n${message.trim()}`;
  const labels: Record<string, string> = {
    salon: c("Salon pilot / demo", "Salon pilot / demo"),
    customer: c("Customer availability", "Customer availability"),
    pricing: c("Pricing request", "Pricing request"),
    investor: c("Investor discussion", "Investor discussion"),
    partner: c("Growth Partner / B2B", "Growth Partner / B2B"),
    support: c("Support", "Support"),
  };
  async function copy() {
    try {
      await navigator.clipboard.writeText(body());
      setStatus(
        c(
          "Draft copied. Paste it into your email app and send it to the address below.",
          "Draft copy हो गया। इसे email app में paste करके नीचे दिए address पर भेजें।",
        ),
      );
    } catch {
      setStatus(
        c(
          "Copy is unavailable. Select and copy the draft shown below, then send it by email.",
          "Copy उपलब्ध नहीं। नीचे draft select करके copy करें और email भेजें।",
        ),
      );
    }
  }
  return (
    <Page>
      <Hero
        eyebrow={c("CONTACT NEXORA", "NEXORA से संपर्क")}
        title={c(
          "Tell us what you need to evaluate.",
          "बताइए, आप क्या समझना चाहते हैं।",
        )}
        description={c(
          "Ask about a salon pilot, customer coverage, pricing or an investor discussion. Use the email draft below or contact the team directly.",
          "Salon pilot, customer coverage, pricing या investor discussion के बारे में पूछें। नीचे email draft बनाएँ या सीधे team से संपर्क करें।",
        )}
      />
      <Section title={c("Prepare your enquiry", "अपनी enquiry तैयार करें")}>
        <div className="contact-grid">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:${FOOTER_SECTIONS.contactEmail}?subject=${encodeURIComponent(`Nexora enquiry: ${interest}`)}&body=${encodeURIComponent(body())}`;
              setStatus(
                c(
                  "Email draft opened if a mail app is configured. Send it there to complete your enquiry. Nothing has been submitted on this website.",
                  "Mail app configured होने पर email draft खुलेगा। Enquiry पूरी करने के लिए वहाँ Send दबाएँ। इस website पर कुछ submit नहीं हुआ है।",
                ),
              );
            }}
            className="contact-form"
          >
            <label htmlFor="contact-interest">
              {c("I am interested in", "मुझे जानकारी चाहिए")}
            </label>
            <select
              id="contact-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              {interests.map((x) => (
                <option key={x} value={x}>
                  {labels[x]}
                </option>
              ))}
            </select>
            <label htmlFor="contact-name">{c("Name", "नाम")}</label>
            <input
              id="contact-name"
              autoComplete="name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="contact-email">
              {c("Your reply email", "आपका reply email")}
            </label>
            <input
              id="contact-email"
              autoComplete="email"
              type="email"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="contact-message">
              {c("Your question", "आपका सवाल")}
            </label>
            <textarea
              id="contact-message"
              rows={5}
              required
              maxLength={1500}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="small-note">
              {c(
                "This prepares an email; it does not submit or store an enquiry on this website. Your email provider handles delivery when you send. Do not include payment or identity documents.",
                "यह email तैयार करता है; website पर enquiry submit या store नहीं होती। Send करने पर आपका email provider delivery करता है। Payment या identity documents शामिल न करें।",
              )}
            </p>
            <div className="actions">
              <button className="journey-button" type="submit">
                {c("Open email draft", "Email draft खोलें")}
              </button>
              <button
                className="journey-button secondary"
                type="button"
                onClick={copy}
              >
                {c("Copy draft", "Draft copy करें")}
              </button>
            </div>
            <p role="status">{status}</p>
          </form>
          <aside className="journey-card">
            <h3>{c("Direct contact", "सीधा संपर्क")}</h3>
            <p>
              <a
                className="text-link break-all"
                href={`mailto:${FOOTER_SECTIONS.contactEmail}`}
              >
                {FOOTER_SECTIONS.contactEmail}
              </a>
            </p>
            <p>
              <a
                className="text-link"
                href={`tel:${FOOTER_SECTIONS.contactPhone.replace(/\s/g, "")}`}
              >
                {FOOTER_SECTIONS.contactPhone}
              </a>
            </p>
            <h3>{c("Your draft", "आपका draft")}</h3>
            <pre className="draft-preview">{body()}</pre>
            <p className="small-note">
              {c(
                "If your mail app does not open, copy this draft and send it manually. Website completion is not proof of email delivery.",
                "Mail app न खुले तो draft copy करके खुद email भेजें। Website पर action पूरा होना email delivery का प्रमाण नहीं है।",
              )}
            </p>
          </aside>
        </div>
      </Section>
    </Page>
  );
}
