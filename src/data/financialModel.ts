// Planning assumptions, never actual trading results. All amounts are INR.
export interface ModelInputs {
  salons: number;
  monthlyGmvPerSalon: number;
  commissionRate: number;
  advanceRate: number;
  monthlyAdvertising: number;
}
export const MODEL_ASSUMPTIONS: Readonly<ModelInputs> = Object.freeze({
  salons: 1000,
  monthlyGmvPerSalon: 30000,
  commissionRate: 0.1,
  advanceRate: 0.25,
  monthlyAdvertising: 100000,
});
export function calculateModel(inputs: ModelInputs = MODEL_ASSUMPTIONS) {
  const values = Object.values(inputs);
  if (
    values.some((value) => !Number.isFinite(value) || value < 0) ||
    inputs.commissionRate > 1 ||
    inputs.advanceRate > 1
  )
    throw new RangeError("Invalid financial assumptions");
  const annualGmv = inputs.salons * inputs.monthlyGmvPerSalon * 12;
  const annualCommission = annualGmv * inputs.commissionRate;
  const annualAdvertising = inputs.monthlyAdvertising * 12;
  return {
    annualGmv,
    annualAdvance: annualGmv * inputs.advanceRate,
    annualCommission,
    annualAdvertising,
    annualRevenue: annualCommission + annualAdvertising,
  };
}
export const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
