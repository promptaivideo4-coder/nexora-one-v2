import {
  calculateModel,
  formatINR,
  MODEL_ASSUMPTIONS,
} from "../../data/financialModel";
import { useCopy } from "./Page";
export function FinancialModel() {
  const c = useCopy();
  const model = calculateModel();
  const rows = [
    [
      c("Annual booking value (GMV)", "सालाना booking value (GMV)"),
      "1,000 × ₹30,000 × 12",
      model.annualGmv,
    ],
    [
      c("Reservation advance collected", "Reservation advance collection"),
      "GMV × 25%",
      model.annualAdvance,
    ],
    [
      c("Commission revenue", "Commission revenue"),
      "GMV × 10%",
      model.annualCommission,
    ],
    [
      c("Assumed advertising revenue", "अनुमानित advertising revenue"),
      `${formatINR(MODEL_ASSUMPTIONS.monthlyAdvertising)} × 12`,
      model.annualAdvertising,
    ],
    [
      c("Total modeled annual revenue", "कुल अनुमानित सालाना revenue"),
      c("Commission + advertising", "Commission + advertising"),
      model.annualRevenue,
    ],
  ] as const;
  return (
    <>
      <p className="notice">
        {c(
          "Illustrative scenario only. Assumes 1,000 active salons for all 12 months, ₹30,000 monthly platform booking value per salon, 10% commission and ₹1 lakh monthly advertising. These are unvalidated assumptions, not achieved results or a launch-year forecast.",
          "सिर्फ उदाहरण: पूरे 12 महीने 1,000 active salons, प्रति salon ₹30,000 monthly platform bookings, 10% commission और ₹1 लाख monthly advertising माना गया है। ये अप्रमाणित assumptions हैं; actual results या launch-year forecast नहीं।",
        )}
      </p>
      <div className="table-scroll">
        <table>
          <caption>
            {c(
              "Planning model · amounts in INR",
              "Planning model · सभी रकम रुपये में",
            )}
          </caption>
          <thead>
            <tr>
              <th scope="col">{c("Metric", "माप")}</th>
              <th scope="col">{c("Calculation", "गणना")}</th>
              <th scope="col">{c("Annual amount", "सालाना रकम")}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, formula, value]) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                <td>{formula}</td>
                <td>{formatINR(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        {c(
          "Advance collections include money owed to salons; they are not additional company revenue. Revenue is before refunds, payment fees, partner incentives, operating costs and taxes. No profit, dividend, monthly payout or payback period is implied.",
          "Advance collection में salons को देय रकम भी शामिल है; यह अतिरिक्त company revenue नहीं है। Revenue से refunds, payment fees, partner incentives, operating costs और taxes अभी नहीं घटे हैं। इससे profit, dividend, monthly payout या payback period का दावा नहीं होता।",
        )}
      </p>
    </>
  );
}
