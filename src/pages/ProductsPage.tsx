import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  useCopy,
} from "../components/journey/Page";
import { PRODUCTS_DATA, type ProductItem } from "../data/products";
export function ProductsPage() {
  const c = useCopy();
  const groups = [
    {
      title: c(
        "Start here · salon and customer tools",
        "यहाँ से शुरू करें · salon और customer tools",
      ),
      ids: ["salonos", "customer-app", "white-label"],
    },
    {
      title: c("Adjacent beauty-network demos", "Beauty-network के अन्य demos"),
      ids: ["growth-partner", "salon-jobs", "beauty-b2b", "ai-tools"],
    },
  ];
  return (
    <Page>
      <Hero
        eyebrow={c("PRODUCT STATUS", "PRODUCT STATUS")}
        title={c(
          "Explore the core product before the wider network.",
          "बड़े network से पहले core product देखें।",
        )}
        description={c(
          "These links lead to separate demonstrations. Demo status does not certify production readiness, integrations, merchant activity or revenue. Confirm operating availability with the team.",
          "ये links अलग demonstrations पर जाते हैं। Demo status production readiness, integrations, merchant activity या revenue certify नहीं करता। Operating availability team से confirm करें।",
        )}
      >
        <div className="actions">
          <Action to="/for-salons#demo">
            {c("Start with the guided demo", "Guided demo से शुरू करें")}
          </Action>
        </div>
      </Hero>
      {groups.map((group) => (
        <Section key={group.title} title={group.title}>
          <div className="card-grid">
            {group.ids
              .map((id) => PRODUCTS_DATA.find((p) => p.id === id))
              .filter(
                (product): product is ProductItem => product !== undefined,
              )
              .map((product) => (
                <Card id={product.id} key={product.id} title={product.name}>
                  <p className="eyebrow">{product.status}</p>
                  <p>
                    {c(
                      product.oneLiner,
                      product.id === "salonos"
                        ? "Salon appointments और customer records का demo।"
                        : product.id === "customer-app"
                          ? "Salon discovery और booking का demo।"
                          : product.id === "white-label"
                            ? "Salon की अपनी branded website का demo।"
                            : "Beauty network का अलग demo; availability team से confirm करें।",
                    )}
                  </p>
                  {product.demoUrl && (
                    <a
                      className="journey-button secondary"
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {c("Open external demo ↗", "बाहरी demo खोलें ↗")}
                    </a>
                  )}
                </Card>
              ))}
          </div>
        </Section>
      ))}
      <Section
        title={c(
          "Other industries are roadmap options",
          "अन्य industries roadmap options हैं",
        )}
      >
        <p>
          {c(
            "Food and Real Estate demonstrations are kept outside the main customer journey. Advertising is listed as Planned. None is evidence of current commercial scale.",
            "Food और Real Estate demonstrations मुख्य customer journey से अलग हैं। Advertising का status Planned है। इनमें से कोई current commercial scale का प्रमाण नहीं।",
          )}
        </p>
        <Action to="/verticals" secondary>
          {c("Read the roadmap", "Roadmap पढ़ें")}
        </Action>
      </Section>
    </Page>
  );
}
