import {
  Page,
  Hero,
  Section,
  Card,
  Action,
  FAQ,
  useCopy,
} from "../components/journey/Page";
export function CustomersPage() {
  const c = useCopy();
  return (
    <Page>
      <Hero
        eyebrow={c(
          "FOR CUSTOMERS · BOOKING DEMO",
          "CUSTOMERS के लिए · BOOKING DEMO",
        )}
        title={c(
          "Find a salon. Review the service. Choose a slot.",
          "Salon खोजें। Service देखें। समय चुनें।",
        )}
        description={c(
          "Explore Nexora’s customer booking demo. Check the salon, location, total price and availability before confirming any real appointment.",
          "Nexora का customer booking demo देखें। असली appointment confirm करने से पहले salon, location, पूरी कीमत और availability जाँचें।",
        )}
      >
        <div className="actions">
          <a
            className="journey-button"
            href="https://glow-slot-virid.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {c("Open customer booking demo ↗", "Customer booking demo खोलें ↗")}
          </a>
          <Action to="/contact?interest=customer" secondary>
            {c("Check availability", "Availability पूछें")}
          </Action>
        </div>
        <p className="small-note">
          {c(
            "This opens an external demo. Listings, payments and bookings are not processed on this information website.",
            "इससे बाहरी demo खुलेगा। इस information website पर listings, payments और bookings process नहीं होते।",
          )}
        </p>
      </Hero>
      <Section title={c("Your booking journey", "आपकी booking journey")}>
        <div className="card-grid">
          <Card title={c("01 · Discover", "01 · खोजें")}>
            <p>
              {c(
                "Select your location and look for available salons and services.",
                "अपनी location चुनें और उपलब्ध salons व services देखें।",
              )}
            </p>
          </Card>
          <Card title={c("02 · Review", "02 · जाँचें")}>
            <p>
              {c(
                "Check the price, service details, address, slot and cancellation terms.",
                "Price, service details, address, slot और cancellation terms जाँचें।",
              )}
            </p>
          </Card>
          <Card title={c("03 · Confirm", "03 · पुष्टि करें")}>
            <p>
              {c(
                "Use the booking product to confirm, then keep the confirmation and support details.",
                "Booking product में पुष्टि करें, फिर confirmation और support details रखें।",
              )}
            </p>
          </Card>
        </div>
      </Section>
      <Section title={c("Before you book", "Booking से पहले")}>
        <FAQ
          items={[
            {
              q: c(
                "Is Nexora available in my area?",
                "क्या Nexora मेरे area में उपलब्ध है?",
              ),
              a: c(
                "City coverage and participating salons need confirmation. Demo listings are not proof of live service coverage.",
                "City coverage और participating salons की पुष्टि जरूरी है। Demo listings live coverage का प्रमाण नहीं हैं।",
              ),
            },
            {
              q: c(
                "Does this page take a booking or payment?",
                "क्या यह page booking या payment लेता है?",
              ),
              a: c(
                "No. It explains the journey and links to a separate demo. Confirm the operating status before making any payment there.",
                "नहीं। यह journey समझाता है और अलग demo का link देता है। वहाँ payment करने से पहले operating status confirm करें।",
              ),
            },
          ]}
        />
      </Section>
    </Page>
  );
}
