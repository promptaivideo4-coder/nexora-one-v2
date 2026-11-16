import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  useCopy,
} from "../components/journey/Page";
export function VerticalsPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c("FOCUS & ROADMAP", "FOCUS और ROADMAP")}
        title={c(
          "Beauty first. Expansion follows evidence.",
          "पहले Beauty। प्रमाण के बाद expansion।",
        )}
        description={c(
          "Separate the initial product focus from future possibilities. A demo in another category is not an operating business or verified market traction.",
          "शुरुआती product focus और future possibilities अलग हैं। किसी category का demo operating business या verified market traction नहीं है।",
        )}
      />
      <Section title={c("Current product focus", "Current product focus")}>
        <div className="card-grid two">
          <Card title={c("Salon operations", "Salon operations")}>
            <p>
              {c(
                "Appointments, customer records, follow-up and branded presence demonstrations.",
                "Appointments, customer records, follow-up और branded presence demonstrations।",
              )}
            </p>
          </Card>
          <Card title={c("Customer booking", "Customer booking")}>
            <p>
              {c(
                "Demonstrations of salon discovery and appointment booking.",
                "Salon discovery और appointment booking के demonstrations।",
              )}
            </p>
          </Card>
        </div>
        <div className="actions">
          <Action to="/products">
            {c("Review demo status", "Demo status देखें")}
          </Action>
        </div>
      </Section>
      <Section
        title={c(
          "Adjacent beauty-network options",
          "Beauty-network के अगले options",
        )}
      >
        <p>
          {c(
            "Growth Partners, professional jobs and B2B supply are adjacent concepts to validate after the core salon workflow. Availability, commissions and operating capacity need confirmation.",
            "Growth Partners, professional jobs और B2B supply core salon workflow के बाद validate करने वाले adjacent concepts हैं। Availability, commissions और operating capacity confirm करनी होगी।",
          )}
        </p>
      </Section>
      <Section title={c("Future industries", "Future industries")}>
        <p>
          {c(
            "Food, Real Estate and broader advertising remain expansion options. They are not the homepage promise, current revenue or evidence of scale. No launch date is committed here.",
            "Food, Real Estate और broader advertising expansion options हैं। वे homepage promise, current revenue या scale का प्रमाण नहीं। यहाँ launch date तय नहीं की गई है।",
          )}
        </p>
      </Section>
    </Page>
  );
}
