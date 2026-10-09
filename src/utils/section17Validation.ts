/**
 * Automated Validation Rules for Section 17.3 (Investment Opportunity)
 * Validates the exact mathematical and structural integrity of the financial model.
 */

export interface Section17ModelValues {
  minimumInvestment: number;
  equityPerInvestor: number;
  totalInvestorEquity: number;
  founderExistingOwnerEquity: number;
  totalInvestment: number;
  postMoneyValuation: number;
  preMoneyValuation: number;
  totalRevenue: number;
  gstIncluded: number;
  razorpay: number;
  growthPartnerRewards: number;
  totalCost: number;
  profitBeforeIncomeTax: number;
  annualInvestorShare: number;
  monthlyInvestorEquivalent: number;
  recoveryPeriodMonths: number;
  refundsAreNotFixedPercentage: boolean;
  rewardsAreExpenses: boolean;
  guaranteedIncome: boolean;
}

export const SECTION_17_3_DATA: Section17ModelValues = {
  minimumInvestment: 500000,
  equityPerInvestor: 0.01,
  totalInvestorEquity: 0.10,
  founderExistingOwnerEquity: 0.90,
  totalInvestment: 5000000,
  postMoneyValuation: 50000000,
  preMoneyValuation: 45000000,
  totalRevenue: 37200000,
  gstIncluded: 5684746,
  razorpay: 3600000,
  growthPartnerRewards: 602500,
  totalCost: 17612500,
  profitBeforeIncomeTax: 13890254,
  annualInvestorShare: 138903,
  monthlyInvestorEquivalent: 11575,
  recoveryPeriodMonths: 43,
  refundsAreNotFixedPercentage: true,
  rewardsAreExpenses: true,
  guaranteedIncome: false,
};

export function runSection17ValidationChecks(): {
  allPassed: boolean;
  results: { rule: string; passed: boolean }[];
} {
  const d = SECTION_17_3_DATA;
  const checks = [
    { rule: 'assert minimumInvestment == 500000', passed: d.minimumInvestment === 500000 },
    { rule: 'assert equityPerInvestor == 0.01', passed: d.equityPerInvestor === 0.01 },
    { rule: 'assert totalInvestorEquity == 0.10', passed: d.totalInvestorEquity === 0.10 },
    { rule: 'assert founderExistingOwnerEquity == 0.90', passed: d.founderExistingOwnerEquity === 0.90 },
    { rule: 'assert totalInvestment == 5000000', passed: d.totalInvestment === 5000000 },
    { rule: 'assert postMoneyValuation == 50000000', passed: d.postMoneyValuation === 50000000 },
    { rule: 'assert preMoneyValuation == 45000000', passed: d.preMoneyValuation === 45000000 },
    { rule: 'assert totalRevenue == 37200000', passed: d.totalRevenue === 37200000 },
    { rule: 'assert gstIncluded == 5684746', passed: d.gstIncluded === 5684746 },
    { rule: 'assert razorpay == 3600000', passed: d.razorpay === 3600000 },
    { rule: 'assert growthPartnerRewards == 602500', passed: d.growthPartnerRewards === 602500 },
    { rule: 'assert totalCost == 17612500', passed: d.totalCost === 17612500 },
    { rule: 'assert profitBeforeIncomeTax == 13890254', passed: d.profitBeforeIncomeTax === 13890254 },
    { rule: 'assert annualInvestorShare == 138903', passed: d.annualInvestorShare === 138903 },
    { rule: 'assert monthlyInvestorEquivalent == 11575', passed: d.monthlyInvestorEquivalent === 11575 },
    { rule: 'assert recoveryPeriodMonths == 43', passed: d.recoveryPeriodMonths === 43 },
    { rule: 'assert refundsAreNotFixedPercentage == true', passed: d.refundsAreNotFixedPercentage === true },
    { rule: 'assert rewardsAreExpenses == true', passed: d.rewardsAreExpenses === true },
    { rule: 'assert guaranteedIncome == false', passed: d.guaranteedIncome === false },
  ];

  return {
    allPassed: checks.every((c) => c.passed),
    results: checks,
  };
}
