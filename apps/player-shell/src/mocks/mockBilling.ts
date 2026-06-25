import type { BillingPlan } from "./types";

export const billingPlans: BillingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 19,
    description: "Good for small teams",
    features: ["Basic billing", "Email support", "1 workspace"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    description: "For growing products",
    features: ["Advanced billing", "Priority support", "5 workspaces"],
  },
  {
    id: "business",
    name: "Business",
    price: 99,
    description: "For larger teams",
    features: ["Custom billing", "Dedicated support", "Unlimited workspaces"],
  },
];
