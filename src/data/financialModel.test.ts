import assert from "node:assert/strict";
import { test } from "node:test";
import { calculateModel, MODEL_ASSUMPTIONS, formatINR } from "./financialModel";
test("the published 1,000-salon scenario has consistent rupee units", () => {
  const model = calculateModel();
  assert.equal(model.annualGmv, 360_000_000); // 36 crore, not 3.6 crore
  assert.equal(model.annualAdvance, 90_000_000);
  assert.equal(model.annualCommission, 36_000_000);
  assert.equal(model.annualAdvertising, 1_200_000);
  assert.equal(model.annualRevenue, 37_200_000);
  assert.equal(formatINR(model.annualRevenue), "₹3,72,00,000");
});
test("advance collection is never counted again as company revenue", () => {
  const model = calculateModel({ ...MODEL_ASSUMPTIONS, advanceRate: 1 });
  assert.equal(model.annualRevenue, 37_200_000);
});
test("zero activity and no ads produce no revenue", () => {
  const model = calculateModel({
    ...MODEL_ASSUMPTIONS,
    salons: 0,
    monthlyAdvertising: 0,
  });
  assert.equal(model.annualRevenue, 0);
});
test("invalid assumptions fail instead of producing a misleading number", () => {
  for (const overrides of [
    { salons: -1 },
    { salons: NaN },
    { commissionRate: 1.1 },
    { advanceRate: Infinity },
  ]) {
    assert.throws(
      () => calculateModel({ ...MODEL_ASSUMPTIONS, ...overrides }),
      RangeError,
    );
  }
});
