import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  useCopy,
} from "../components/journey/Page";
export function PricingPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c("PRICING & COMMERCIAL TERMS", "PRICING और COMMERCIAL TERMS")}
        title={c("Know the terms before you join.", "जुड़ने से पहले charges समझें।")}
        description={c(
          "Final customer pricing has not been verified for publication. Request a written quote for the features and support you need.",
          "Final customer pricing अभी publication के लिए verified नहीं है। अपने features और support के लिए written quote माँगें।",
        )}
      >
        <div className="actions">
          <Action to="/contact?interest=pricing">
            {c("Request pricing", "Pricing पूछें")}
          </Action>
          <Action to="/for-salons#demo" secondary>
            {c("See the demo first", "पहले demo देखें")}
          </Action>
        </div>
      </Hero>
      <Section
        title={c(
          "Your quote should answer these questions",
          "आपके quote में इन सवालों के जवाब हों",
        )}
      >
        <div className="card-grid">
          <Card title={c("Setup & subscription", "Setup और subscription")}>
            <p>
              {c(
                "What is charged once, what recurs, and which features, staff seats and support are included?",
                "कौनसा charge एक बार है, कौनसा recurring है और कौनसे features, staff seats व support शामिल हैं?",
              )}
            </p>
          </Card>
          <Card title={c("Booking commission", "Booking commission")}>
            <p>
              {c(
                "Does commission apply to existing salon customers, new platform customers or both? What happens after refunds?",
                "Commission पुराने salon customers पर लगेगा, नए platform customers पर या दोनों पर? Refund पर क्या होगा?",
              )}
            </p>
          </Card>
          <Card title={c("Other charges", "अन्य charges")}>
            <p>
              {c(
                "Confirm taxes, payment fees, messaging charges, cancellation terms and data export before accepting.",
                "Accept करने से पहले taxes, payment fees, messaging charges, cancellation terms और data export confirm करें।",
              )}
            </p>
          </Card>
        </div>
        <p className="notice">
          {c(
            "The 10% rate in the investor scenario is a planning assumption, not a published customer offer. No free plan, discount or guaranteed return is implied.",
            "Investor scenario का 10% rate planning assumption है, published customer offer नहीं। Free plan, discount या guaranteed return का दावा नहीं है।",
          )}
        </p>
      </Section>
    </Page>
  );
}
