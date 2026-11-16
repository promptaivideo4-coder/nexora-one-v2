import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  useCopy,
} from "../components/journey/Page";
import { FinancialModel } from "../components/journey/FinancialModel";
export function InsightsPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c("OPTIONAL INVESTOR RESOURCE", "OPTIONAL INVESTOR RESOURCE")}
        title={c(
          "Understand the numbers. Keep the pitch focused.",
          "Numbers समझें। Pitch को केंद्रित रखें।",
        )}
        description={c(
          "A short reference for reading the Nexora proposal. Start with the investor brief for the business story.",
          "Nexora proposal पढ़ने के लिए छोटा reference। Business की कहानी के लिए investor brief से शुरुआत करें।",
        )}
      >
        <div className="actions">
          <Action to="/investors">
            {c("Read the investor brief", "Investor brief पढ़ें")}
          </Action>
        </div>
      </Hero>
      <Section title={c("Three distinctions that matter", "तीन जरूरी फर्क")}>
        <div className="card-grid">
          <Card title="GMV ≠ Revenue">
            <p>
              {c(
                "GMV is the value of completed services booked through a platform. Company revenue is its earned fees and other recognized income, not all money collected.",
                "GMV platform से book हुई completed services की value है। Company revenue उसकी earned fees और अन्य recognized income है; पूरी collected रकम नहीं।",
              )}
            </p>
          </Card>
          <Card title="Revenue ≠ Profit">
            <p>
              {c(
                "Revenue still needs to cover costs. Contribution, operating profit and cash flow answer different questions.",
                "Revenue से costs चुकानी होती हैं। Contribution, operating profit और cash flow अलग चीजें बताते हैं।",
              )}
            </p>
          </Card>
          <Card title={c("Equity ≠ monthly income", "Equity ≠ monthly income")}>
            <p>
              {c(
                "An ownership percentage is not a fixed monthly payout. Review the actual instrument, rights, risks and agreed terms.",
                "Ownership percentage fixed monthly payout नहीं है। Actual instrument, rights, risks और agreed terms जाँचें।",
              )}
            </p>
          </Card>
        </div>
      </Section>
      <Section
        id="execution-plan"
        title={c(
          "The planning model, with visible assumptions",
          "स्पष्ट assumptions वाला planning model",
        )}
      >
        <FinancialModel />
      </Section>
      <Section
        title={c(
          "A three-minute presentation sequence",
          "तीन मिनट की presentation का क्रम",
        )}
      >
        <ol className="numbered-list">
          {[
            c(
              "0–20 sec: one real salon problem.",
              "0–20 sec: salon की एक वास्तविक समस्या।",
            ),
            c("20–40 sec: the focused solution.", "20–40 sec: केंद्रित समाधान।"),
            c(
              "40–80 sec: one complete product workflow.",
              "40–80 sec: product का एक पूरा workflow।",
            ),
            c(
              "80–110 sec: verified evidence, or an honest statement of what remains unvalidated.",
              "80–110 sec: verified evidence या स्पष्ट unvalidated status।",
            ),
            c(
              "110–140 sec: revenue model and contribution.",
              "110–140 sec: revenue model और contribution।",
            ),
            c(
              "140–160 sec: acquisition and competition.",
              "140–160 sec: acquisition और competition।",
            ),
            c(
              "160–180 sec: team, funding request and next milestone.",
              "160–180 sec: team, funding request और अगला milestone।",
            ),
          ].map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ol>
        <p className="small-note">
          {c(
            "This is a suggested presentation format, not a claim of affiliation with or selection by Shark Tank.",
            "यह सुझाया presentation format है; Shark Tank से affiliation या selection का दावा नहीं।",
          )}
        </p>
      </Section>
    </Page>
  );
}
