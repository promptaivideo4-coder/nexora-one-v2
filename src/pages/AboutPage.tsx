import {
  Page,
  Hero,
  Section,
  Action,
  useCopy,
} from "../components/journey/Page";
export function AboutPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow="NEXORA ONE"
        title={c(
          "Start with beauty. Prove value locally.",
          "Beauty से शुरुआत। Local market में उपयोगिता साबित करें।",
        )}
        description={c(
          "Nexora One is a founder-led product effort focused on salon operations and customer booking. The goal is to make everyday work easier before expanding the network.",
          "Nexora One salon operations और customer booking पर केंद्रित founder-led product effort है। Network बढ़ाने से पहले रोज के काम को आसान बनाना लक्ष्य है।",
        )}
      />
      <Section title={c("Founder", "Founder")}>
        <h3>Vijay K. Tiwari</h3>
        <p>
          {c(
            "Explore the available product demonstrations and speak with the founder about current readiness, the pilot plan and execution responsibilities.",
            "उपलब्ध product demonstrations देखें और current readiness, pilot plan व execution responsibilities पर founder से बात करें।",
          )}
        </p>
        <div className="actions">
          <Action to="/contact">
            {c("Contact the team", "Team से संपर्क करें")}
          </Action>
        </div>
      </Section>
      <Section title={c("Our operating priorities", "हमारी प्राथमिकताएँ")}>
        <ol className="numbered-list">
          <li>
            {c(
              "A clear daily workflow for salon owners.",
              "Salon owners के लिए साफ daily workflow।",
            )}
          </li>
          <li>
            {c(
              "A booking experience customers can understand.",
              "Customers को समझ आने वाला booking experience।",
            )}
          </li>
          <li>
            {c(
              "Evidence of adoption and repeat usage before broader expansion.",
              "बड़े expansion से पहले adoption और repeat usage के प्रमाण।",
            )}
          </li>
        </ol>
      </Section>
      <Section title={c("Company information", "Company की जानकारी")}>
        <p>
          {c(
            "Nexora One is the product brand. Request verified operating-entity, incorporation and ownership documents before any commercial or investment agreement. This page does not certify corporate records.",
            "Nexora One product brand है। Commercial या investment agreement से पहले verified operating-entity, incorporation और ownership documents माँगें। यह page corporate records certify नहीं करता।",
          )}
        </p>
      </Section>
    </Page>
  );
}
