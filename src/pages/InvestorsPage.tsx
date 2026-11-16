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
import { FinancialModel } from "../components/journey/FinancialModel";
export function InvestorsPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c(
          "INVESTOR BRIEF · BEAUTY FIRST",
          "INVESTOR BRIEF · BEAUTY FIRST",
        )}
        title={c(
          "A focused salon workflow. A business to validate.",
          "Salon के लिए केंद्रित workflow। Market में साबित करने वाला business।",
        )}
        description={c(
          "Nexora One is building salon operations and a connected customer booking experience. Evaluate the product demos, the evidence available and the next validation milestones separately.",
          "Nexora One salon operations और connected customer booking experience बना रहा है। Product demos, उपलब्ध प्रमाण और अगले validation milestones को अलग-अलग परखें।",
        )}
      >
        <div className="actions">
          <Action to="/for-salons#demo">
            {c("See product proof", "Product demo देखें")}
          </Action>
          <Action to="/contact?interest=investor" secondary>
            {c("Request an investor discussion", "Investor discussion माँगें")}
          </Action>
        </div>
        <p className="notice">
          {c(
            "Evidence status: demo-stage links are available. Verified current active salons, completed bookings, revenue and retention have not been supplied for publication. Commercial readiness has not been independently established here.",
            "Evidence status: demo-stage links उपलब्ध हैं। Current active salons, completed bookings, revenue और retention के verified records publication के लिए उपलब्ध नहीं हैं। यहाँ commercial readiness independently establish नहीं की गई है।",
          )}
        </p>
      </Hero>
      <Section
        id="problem"
        eyebrow="01"
        title={c("The customer and the problem", "Customer और उसकी समस्या")}
      >
        <p>
          {c(
            "Initial customer: local salon owners who handle appointments, customer history and follow-up across notebooks, phone calls and messages. The product hypothesis is that a simpler daily workflow is useful enough for owners to adopt and keep using.",
            "शुरुआती customer: local salon owners जो appointments, customer history और follow-up notebooks, calls और messages में संभालते हैं। Product hypothesis है कि आसान daily workflow owners को अपनाने और लगातार इस्तेमाल करने लायक लगेगा।",
          )}
        </p>
      </Section>
      <Section
        id="solution"
        eyebrow="02"
        title={c("Show one complete workflow", "एक पूरा workflow दिखाएँ")}
      >
        <div className="card-grid">
          <Card title={c("Owner tools", "Owner tools")}>
            <p>
              {c(
                "Customer record → appointment → visit history → follow-up.",
                "Customer record → appointment → visit history → follow-up।",
              )}
            </p>
            <Action to="/for-salons#demo" secondary>
              {c("Try the walkthrough", "Walkthrough देखें")}
            </Action>
          </Card>
          <Card title={c("Customer experience", "Customer experience")}>
            <p>
              {c(
                "Location → salon → service and slot → booking confirmation.",
                "Location → salon → service और slot → booking confirmation।",
              )}
            </p>
            <Action to="/for-customers" secondary>
              {c("View booking demo", "Booking demo देखें")}
            </Action>
          </Card>
          <Card title={c("Current scope", "Current scope")}>
            <p>
              {c(
                "Beauty is the first market. Other industries and network layers are roadmap options, not proof of current scale.",
                "Beauty पहला market है। अन्य industries और network layers roadmap options हैं, current scale का प्रमाण नहीं।",
              )}
            </p>
            <Action to="/verticals" secondary>
              {c("View roadmap", "Roadmap देखें")}
            </Action>
          </Card>
        </div>
      </Section>
      <Section
        id="traction"
        eyebrow="03"
        title={c(
          "Actual results belong ahead of projections",
          "Actual results को projections से पहले रखें",
        )}
      >
        <div className="table-scroll">
          <table>
            <caption>
              {c(
                "Current evidence register · no live data connection",
                "Current evidence register · live data connection नहीं",
              )}
            </caption>
            <thead>
              <tr>
                <th scope="col">{c("Metric", "Metric")}</th>
                <th scope="col">
                  {c("Publication status", "Publication status")}
                </th>
                <th scope="col">{c("Evidence required", "जरूरी प्रमाण")}</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  c("Active salons", "Active salons"),
                  c(
                    "Dated usage records and a defined active threshold",
                    "Dated usage records और active की स्पष्ट definition",
                  ),
                ],
                [
                  c("Completed bookings", "Completed bookings"),
                  c(
                    "Completed transactions excluding cancellations",
                    "Cancellations हटाकर completed transactions",
                  ),
                ],
                [
                  c("Recognized revenue", "Recognized revenue"),
                  c(
                    "Reconciled ledger and settlement records",
                    "Reconciled ledger और settlement records",
                  ),
                ],
                [
                  c(
                    "Retention and acquisition cost",
                    "Retention और acquisition cost",
                  ),
                  c(
                    "Dated cohorts and full channel costs",
                    "Dated cohorts और पूरी channel cost",
                  ),
                ],
              ].map(([metric, evidence]) => (
                <tr key={metric}>
                  <th scope="row">{metric}</th>
                  <td>
                    {c(
                      "Not verified for publication",
                      "Publication के लिए verified नहीं",
                    )}
                  </td>
                  <td>{evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          {c(
            "Unknown is not zero. Demo listings are not active merchants, and modeled bookings are not completed transactions.",
            "Unknown का मतलब zero नहीं। Demo listings active merchants नहीं हैं और modeled bookings completed transactions नहीं हैं।",
          )}
        </p>
      </Section>
      <Section
        id="business-model"
        eyebrow="04"
        title={c("Monetization and unit economics", "कमाई और unit economics")}
      >
        <p>
          {c(
            "The existing business proposal models booking commission and advertising. The commission basis, treatment of a salon’s existing customers, actual willingness to pay and advertising demand still need validation. Customer pricing must be confirmed separately.",
            "मौजूदा proposal booking commission और advertising model करता है। Commission का आधार, salon के पुराने customers पर charges, भुगतान करने की इच्छा और advertising demand को validate करना बाकी है। Customer pricing अलग confirm करनी होगी।",
          )}
        </p>
        <div className="card-grid two">
          <Card
            title={c(
              "Contribution per completed booking",
              "हर completed booking का contribution",
            )}
          >
            <p>
              {c(
                "Commission earned − payment fees − funded discounts − partner incentives − variable support/refund costs.",
                "मिला commission − payment fees − funded discounts − partner incentives − variable support/refund costs।",
              )}
            </p>
          </Card>
          <Card title={c("Acquisition payback", "Acquisition cost की भरपाई")}>
            <p>
              {c(
                "Measure the full cost to activate a salon, then compare it with contribution from retained usage. A partner network is an acquisition strategy until its costs and conversion are measured.",
                "Salon activate करने की पूरी cost मापें और retained usage के contribution से तुलना करें। Partner network की cost और conversion मापने तक वह acquisition strategy है।",
              )}
            </p>
          </Card>
        </div>
      </Section>
      <Section
        id="financial-model"
        eyebrow="05"
        title={c(
          "A transparent planning scenario",
          "स्पष्ट assumptions वाला planning scenario",
        )}
      >
        <FinancialModel />
      </Section>
      <Section
        id="go-to-market"
        eyebrow="06"
        title={c(
          "Validate locally before expanding",
          "Expansion से पहले local validation",
        )}
      >
        <ol className="numbered-list">
          <li>
            {c(
              "Recruit a manageable salon pilot in Jaipur; document the problem and current alternatives.",
              "Jaipur में सीमित salon pilot recruit करें; समस्या और current alternatives दर्ज करें।",
            )}
          </li>
          <li>
            {c(
              "Measure setup completion, first useful action, weekly usage and support effort.",
              "Setup completion, पहला उपयोगी action, weekly usage और support effort मापें।",
            )}
          </li>
          <li>
            {c(
              "Test completed bookings, repeat usage, willingness to pay and channel contribution before adding locations.",
              "नई locations जोड़ने से पहले completed bookings, repeat usage, willingness to pay और channel contribution test करें।",
            )}
          </li>
        </ol>
        <p className="small-note">
          {c(
            "These are proposed validation steps, not a report that a pilot has already run.",
            "ये proposed validation steps हैं; pilot पहले चल चुका है, ऐसा दावा नहीं।",
          )}
        </p>
      </Section>
      <Section
        id="competition"
        eyebrow="07"
        title={c(
          "Earn differentiation with evidence",
          "प्रमाण से differentiation बनाइए",
        )}
      >
        <p>
          {c(
            "Salon software and booking marketplaces already exist. Nexora’s proposed combination of owner tools, branded presence, booking and local onboarding needs to demonstrate better activation, retention or economics. More features alone are not a moat.",
            "Salon software और booking marketplaces पहले से हैं। Owner tools, branded presence, booking और local onboarding के Nexora के संयोजन को बेहतर activation, retention या economics साबित करना होगा। ज्यादा features अपने आप moat नहीं हैं।",
          )}
        </p>
        <Action to="/market-research" secondary>
          {c("Read the dated research snapshot", "Dated research snapshot पढ़ें")}
        </Action>
      </Section>
      <Section
        id="team"
        eyebrow="08"
        title={c("Team and execution evidence", "Team और execution के प्रमाण")}
      >
        <p>
          {c(
            "Founder: Vijay K. Tiwari. Review the demonstrated product work alongside the people responsible for engineering, onboarding, customer support and finance. Team appointments, biographies and IP ownership should be supported by records, not placeholder portraits.",
            "Founder: Vijay K. Tiwari। Product work के साथ engineering, onboarding, customer support और finance की जिम्मेदारियाँ देखें। Team appointments, biographies और IP ownership records से समर्थित होने चाहिए।",
          )}
        </p>
        <Action to="/contact?interest=investor" secondary>
          {c(
            "Request team and ownership records",
            "Team और ownership records माँगें",
          )}
        </Action>
      </Section>
      <Section
        id="funding"
        eyebrow="09"
        title={c(
          "Funding should buy a measurable milestone",
          "Funding से मापने योग्य milestone हासिल हो",
        )}
      >
        <p>
          {c(
            "The earlier proposal references a ₹50 lakh raise. It remains a proposal for discussion, not money raised or an executable offer. Confirm the current ask, spending schedule, runway and ownership terms with the founder before evaluating a deal.",
            "पहले proposal में ₹50 लाख raise का उल्लेख है। यह discussion का proposal है; raised funding या executable offer नहीं। Deal evaluate करने से पहले current ask, spending schedule, runway और ownership terms founder से confirm करें।",
          )}
        </p>
        <div className="card-grid">
          <Card title={c("Product readiness", "Product readiness")}>
            <p>
              {c(
                "End-to-end booking, access controls, payment/refund behavior and reliable support.",
                "End-to-end booking, access controls, payment/refund behavior और reliable support।",
              )}
            </p>
          </Card>
          <Card title={c("Pilot evidence", "Pilot evidence")}>
            <p>
              {c(
                "Activated salons, real usage, completed bookings and customer feedback.",
                "Activated salons, real usage, completed bookings और customer feedback।",
              )}
            </p>
          </Card>
          <Card title={c("Repeatable economics", "Repeatable economics")}>
            <p>
              {c(
                "Measured acquisition costs and contribution, with downside scenarios and an operating budget.",
                "Measured acquisition costs और contribution, downside scenarios और operating budget के साथ।",
              )}
            </p>
          </Card>
        </div>
        <p>
          {c(
            "An estimated software build cost is not a company valuation. No fixed monthly income, dividend or capital-recovery period is promised.",
            "Estimated software build cost company valuation नहीं है। Fixed monthly income, dividend या capital-recovery period का वादा नहीं है।",
          )}
        </p>
      </Section>
      <Section
        id="questions"
        eyebrow="10"
        title={c(
          "Questions to resolve before investing",
          "Investment से पहले जरूरी सवाल",
        )}
      >
        <FAQ
          items={[
            {
              q: c(
                "Is the modeled revenue actual revenue?",
                "क्या modeled revenue actual revenue है?",
              ),
              a: c(
                "No. The scenario above is calculated from unvalidated assumptions. Actual revenue requires dated accounting and settlement records.",
                "नहीं। ऊपर scenario अप्रमाणित assumptions से निकला है। Actual revenue के लिए dated accounting और settlement records चाहिए।",
              ),
            },
            {
              q: c("What evidence should I request?", "कौनसे प्रमाण माँगने चाहिए?"),
              a: c(
                "Product walkthrough, pilot cohorts, financial model assumptions, legal entity records, cap table, ownership records and the proposed use of funds. Availability of these documents must be confirmed.",
                "Product walkthrough, pilot cohorts, financial model assumptions, legal entity records, cap table, ownership records और proposed use of funds। Documents की availability confirm करनी होगी।",
              ),
            },
            {
              q: c("What are the main risks?", "मुख्य risks क्या हैं?"),
              a: c(
                "Unproven adoption and retention, competing products, acquisition and support costs, payment reliability and execution capacity. Current demos do not remove these risks.",
                "अप्रमाणित adoption और retention, competition, acquisition और support cost, payment reliability और execution capacity। Demos इन risks को खत्म नहीं करते।",
              ),
            },
          ]}
        />
        <p>
          <a className="text-link" href="/investor-guide">
            {c(
              "Optional: investor terms and pitch sequence →",
              "Optional: investor terms और pitch sequence →",
            )}
          </a>
        </p>
      </Section>
      <NextStep investor />
    </Page>
  );
}
