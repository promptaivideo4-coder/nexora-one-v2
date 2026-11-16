import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  FAQ,
  NextStep,
  useCopy,
} from "../components/journey/Page";
import { SalonDemo } from "../components/journey/SalonDemo";
export function SalonsPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c("FOR SALON OWNERS", "SALON OWNERS के लिए")}
        title={c(
          "See your next appointment. Remember your last customer.",
          "अगली appointment देखें। पिछले customer को याद रखें।",
        )}
        description={c(
          "Explore a workflow for appointments, customer records, your online presence and follow-up. Confirm production features with the team before onboarding.",
          "Appointments, customer records, online presence और follow-up का workflow देखें। Onboarding से पहले production features team से confirm करें।",
        )}
      >
        <div className="actions">
          <Action to="/for-salons#demo">
            {c("Try the walkthrough", "Walkthrough देखें")}
          </Action>
          <Action to="/contact?interest=salon" secondary>
            {c("Ask about pilot access", "Pilot access पूछें")}
          </Action>
        </div>
      </Hero>
      <Section
        title={c(
          "Start with the work you already do",
          "अपने रोज के काम से शुरुआत करें",
        )}
      >
        <div className="card-grid">
          <Card title={c("Appointments", "Appointments")}>
            <p>
              {c(
                "Review a booking, its service and the assigned team member.",
                "Booking, उसकी service और assigned team member देखें।",
              )}
            </p>
          </Card>
          <Card title={c("Customer records", "Customer records")}>
            <p>
              {c(
                "Find contact details and previous visits in one workflow.",
                "Contact details और पिछले visits एक workflow में देखें।",
              )}
            </p>
          </Card>
          <Card title={c("Your booking presence", "आपकी booking presence")}>
            <p>
              {c(
                "Explore a branded page and booking link for your salon.",
                "अपने salon के लिए branded page और booking link का demo देखें।",
              )}
            </p>
          </Card>
        </div>
      </Section>
      <Section
        id="demo"
        title={c("Try a sample salon journey", "Sample salon journey देखें")}
      >
        <SalonDemo />
        <p>
          <a
            className="text-link"
            href="https://fanal-templetes-app.vercel.app/templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c("Open the external SalonOS demo ↗", "बाहरी SalonOS demo खोलें ↗")}
          </a>
        </p>
        <p className="small-note">
          {c(
            "Opens a separate demo website. Availability, accounts and data are managed there.",
            "यह अलग demo website है। उसकी availability, accounts और data वहीं manage होते हैं।",
          )}
        </p>
      </Section>
      <Section
        title={c("What to confirm before setup", "Setup से पहले क्या confirm करें")}
      >
        <ol className="numbered-list">
          <li>
            {c(
              "Pilot city, access and current feature availability.",
              "Pilot city, access और current features की availability।",
            )}
          </li>
          <li>
            {c(
              "Setup charge, subscription and commission on existing versus new customers.",
              "Setup charge, subscription और पुराने बनाम नए customers पर commission।",
            )}
          </li>
          <li>
            {c(
              "Services, staff, location, booking rules and support contact.",
              "Services, staff, location, booking rules और support contact।",
            )}
          </li>
        </ol>
      </Section>
      <Section title={c("Owner questions", "Owner के सवाल")}>
        <FAQ
          items={[
            {
              q: c(
                "Are automated WhatsApp reminders already available?",
                "क्या automatic WhatsApp reminders उपलब्ध हैं?",
              ),
              a: c(
                "Confirm the enabled integration, consent requirements, delivery limits and charges with the team. This website does not send messages.",
                "Enabled integration, consent, delivery limits और charges team से confirm करें। यह website messages नहीं भेजती।",
              ),
            },
            {
              q: c("Is this free?", "क्या यह free है?"),
              a: c(
                "No verified subscription or setup price has been published here. Request written commercial terms before joining.",
                "यहाँ verified subscription या setup price publish नहीं किया गया है। जुड़ने से पहले written commercial terms लें।",
              ),
            },
          ]}
        />
      </Section>
      <NextStep />
    </Page>
  );
}
