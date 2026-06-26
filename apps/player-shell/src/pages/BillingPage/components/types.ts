import type { BillingPlan } from "../../../mocks";

export interface YourSubscriptionProps {
  subscriptionPlan?: BillingPlan;
}

export interface BillingAmountForm {
  amount: number;
}
