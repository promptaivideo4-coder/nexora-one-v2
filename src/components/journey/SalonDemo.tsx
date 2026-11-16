import { useState } from "react";
import { useCopy } from "./Page";
export function SalonDemo() {
  const c = useCopy();
  const [step, setStep] = useState(0);
  const [name, setName] = useState("Asha");
  const [service, setService] = useState("Haircut");
  const labels = [
    c("Customer", "Customer"),
    c("Appointment", "Appointment"),
    c("Follow-up", "Follow-up"),
  ];
  return (
    <div className="demo-panel">
      <p className="eyebrow">
        {c(
          "Interactive walkthrough · sample data",
          "Interactive walkthrough · sample data",
        )}
      </p>
      <ol className="demo-steps">
        {labels.map((label, index) => (
          <li key={label} aria-current={step === index ? "step" : undefined}>
            <span>{index + 1}</span>
            {label}
          </li>
        ))}
      </ol>
      <div className="demo-content" aria-live="polite">
        {step === 0 ? (
          <>
            <h3>
              {c("1. Keep a customer record", "1. Customer का record रखें")}
            </h3>
            <label htmlFor="demo-name">
              {c("Sample customer name", "Sample customer का नाम")}
            </label>
            <input
              id="demo-name"
              maxLength={50}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>
              {c(
                "Keep a customer’s details and visit history together.",
                "Customer की details और visit history एक जगह देखें।",
              )}
            </p>
          </>
        ) : step === 1 ? (
          <>
            <h3>{c("2. Plan an appointment", "2. Appointment तय करें")}</h3>
            <p>
              {c("Sample customer:", "Sample customer:")}{" "}
              <strong>{name.trim() || "Asha"}</strong>
            </p>
            <label htmlFor="demo-service">
              {c("Sample service", "Sample service")}
            </label>
            <select
              id="demo-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="Haircut">{c("Haircut", "हेयरकट")}</option>
              <option value="Facial">{c("Facial", "फेशियल")}</option>
              <option value="Hair colour">{c("Hair colour", "हेयर कलर")}</option>
            </select>
            <p>
              {c(
                "Review the service, staff availability and appointment before confirming in the product.",
                "Product में confirm करने से पहले service, staff availability और appointment देखें।",
              )}
            </p>
          </>
        ) : (
          <>
            <h3>{c("3. See the next follow-up", "3. अगला follow-up देखें")}</h3>
            <div className="sample-record">
              <strong>{name.trim() || "Asha"}</strong>
              <span>{service}</span>
              <span>
                {c(
                  "Visit history → follow-up → rebooking",
                  "Visit history → follow-up → दोबारा booking",
                )}
              </span>
            </div>
            <p>
              {c(
                "A reminder is a possible next action, not a promise of a repeat booking. Sending messages requires a configured messaging service and customer consent.",
                "Reminder अगला संभव कदम है; repeat booking की guarantee नहीं। Message भेजने के लिए configured messaging service और customer consent जरूरी है।",
              )}
            </p>
          </>
        )}
      </div>
      <div className="actions">
        {step > 0 && (
          <button
            className="journey-button secondary"
            onClick={() => setStep(step - 1)}
          >
            {c("Back", "पीछे")}
          </button>
        )}
        <button
          className="journey-button"
          onClick={() => setStep(step === 2 ? 0 : step + 1)}
        >
          {step === 2
            ? c("Restart demo", "Demo फिर देखें")
            : c("Next step", "अगला कदम")}
          <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="small-note">
        {c(
          "This walkthrough stays on this device only while the page is open. It does not create an appointment, store personal data or send a message. Use sample details.",
          "यह walkthrough page खुला रहने तक ही चलता है। इससे appointment नहीं बनती, personal data save नहीं होता और message नहीं जाता। Sample details इस्तेमाल करें।",
        )}
      </p>
    </div>
  );
}
