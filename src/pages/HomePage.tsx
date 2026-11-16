import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  FAQ,
  useCopy,
} from "../components/journey/Page";
import { SalonDemo } from "../components/journey/SalonDemo";
export function HomePage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c(
          "BEAUTY FIRST · PRODUCT DEMOS AVAILABLE",
          "BEAUTY FIRST · PRODUCT DEMOS उपलब्ध",
        )}
        title={c(
          "Your salon. Your customers. One simpler workflow.",
          "आपका salon। आपके customers। काम संभालने का आसान तरीका।",
        )}
        description={c(
          "Nexora One is building tools for salon appointments, customer records and follow-up, alongside a customer booking experience. Start with the demo that fits you.",
          "Nexora One salon appointments, customer records और follow-up के tools बना रहा है, साथ में customer booking experience भी। अपने काम का demo चुनकर शुरुआत करें।",
        )}
      >
        <div className="actions">
          <Action to="/for-salons#demo">
            {c("Try the salon demo", "Salon demo देखें")}
          </Action>
          <Action to="/for-customers" secondary>
            {c("I want to book a salon", "मुझे salon book करना है")}
          </Action>
        </div>
        <p className="small-note">
          {c(
            "Demo access is not a claim of commercial launch or verified business results.",
            "Demo उपलब्ध होना commercial launch या verified business results का दावा नहीं है।",
          )}
        </p>
      </Hero>
      <Section
        title={c("Choose your starting point", "आप कहाँ से शुरुआत करना चाहते हैं?")}
      >
        <div className="card-grid two">
          <Card title={c("For salon owners", "Salon owners के लिए")}>
            <p>
              {c(
                "See how appointments, customer records and follow-up fit into your day.",
                "देखें कि appointments, customer records और follow-up आपके रोज के काम में कैसे मदद कर सकते हैं।",
              )}
            </p>
            <Action to="/for-salons">
              {c("Explore salon tools", "Salon tools समझें")}
            </Action>
          </Card>
          <Card title={c("For customers", "Customers के लिए")}>
            <p>
              {c(
                "Explore the booking demo and check service availability before making plans.",
                "Booking demo देखें और plan बनाने से पहले service availability की पुष्टि करें।",
              )}
            </p>
            <Action to="/for-customers" secondary>
              {c("Explore booking", "Booking समझें")}
            </Action>
          </Card>
        </div>
      </Section>
      <Section
        title={c(
          "Three everyday problems. A clearer workflow.",
          "रोज की तीन परेशानियाँ। काम का साफ तरीका।",
        )}
      >
        <div className="card-grid">
          <Card
            title={c("Appointments get scattered", "Appointments बिखर जाते हैं")}
          >
            <p>
              {c(
                "Review bookings together instead of searching across calls and messages.",
                "Calls और messages में ढूँढने की जगह bookings एक जगह देखें।",
              )}
            </p>
          </Card>
          <Card
            title={c(
              "Customer history gets lost",
              "Customer history नहीं मिलती",
            )}
          >
            <p>
              {c(
                "Keep contact details and visit records together for the next conversation.",
                "अगली बातचीत के लिए contact details और visit records साथ रखें।",
              )}
            </p>
          </Card>
          <Card title={c("Follow-up gets forgotten", "Follow-up छूट जाता है")}>
            <p>
              {c(
                "Identify who may need a reminder and review the next action.",
                "देखें किसे reminder की जरूरत हो सकती है और अगला कदम तय करें।",
              )}
            </p>
          </Card>
        </div>
      </Section>
      <Section
        id="demo"
        title={c(
          "Understand the product in three steps",
          "तीन steps में product समझें",
        )}
      >
        <SalonDemo />
      </Section>
      <Section
        title={c(
          "From demo to your first useful task",
          "Demo से अपने पहले उपयोग तक",
        )}
      >
        <ol className="numbered-list">
          <li>
            {c(
              "Try the workflow and decide whether it fits your salon.",
              "Workflow देखें और समझें कि यह आपके salon के लिए उपयोगी है या नहीं।",
            )}
          </li>
          <li>
            {c(
              "Contact the team to confirm pilot access, pricing and supported features.",
              "Pilot access, pricing और supported features की पुष्टि के लिए team से संपर्क करें।",
            )}
          </li>
          <li>
            {c(
              "When access is confirmed, set up your services, staff and shop location, then test your first booking.",
              "Access confirm होने पर services, staff और shop location setup करके पहली booking test करें।",
            )}
          </li>
        </ol>
      </Section>
      <Section
        title={c("Know what you are evaluating", "जानें कि आप क्या देख रहे हैं")}
      >
        <div className="card-grid two">
          <Card title={c("Clear status", "स्पष्ट status")}>
            <p>
              {c(
                "Product links are labeled Demo or Planned. Verified adoption and revenue figures have not been supplied for this website.",
                "Product links पर Demo या Planned status है। इस website के लिए verified adoption और revenue figures उपलब्ध नहीं कराए गए हैं।",
              )}
            </p>
            <Action to="/products" secondary>
              {c("See product status", "Product status देखें")}
            </Action>
          </Card>
          <Card title={c("Clear commercial terms", "स्पष्ट commercial terms")}>
            <p>
              {c(
                "Confirm subscription, booking commission and setup terms before joining. The investor model is not a customer price quote.",
                "जुड़ने से पहले subscription, booking commission और setup terms confirm करें। Investor model customer price quote नहीं है।",
              )}
            </p>
            <Action to="/pricing" secondary>
              {c("Review pricing questions", "Pricing समझें")}
            </Action>
          </Card>
        </div>
      </Section>
      <Section title={c("Questions before you start", "शुरुआत से पहले के सवाल")}>
        <FAQ
          items={[
            {
              q: c(
                "Can I start using it today?",
                "क्या मैं आज से इस्तेमाल कर सकता हूँ?",
              ),
              a: c(
                "You can explore the demos now. Contact the team to confirm pilot availability and production onboarding.",
                "आप अभी demos देख सकते हैं। Pilot availability और production onboarding team से confirm करें।",
              ),
            },
            {
              q: c(
                "Will Nexora guarantee more customers?",
                "क्या Nexora ज्यादा customers की guarantee देता है?",
              ),
              a: c(
                "No. Discovery, follow-up and booking tools need to be tested against actual customer demand and repeat usage.",
                "नहीं। Discovery, follow-up और booking tools को actual demand और repeat usage के आधार पर परखना होगा।",
              ),
            },
          ]}
        />
        <div className="actions">
          <Action to="/contact?interest=salon">
            {c("Ask about salon access", "Salon access के बारे में पूछें")}
          </Action>
        </div>
      </Section>
    </Page>
  );
}
