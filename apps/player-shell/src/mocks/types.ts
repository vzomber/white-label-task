type subscriptionId = "starter" | "business" | "pro" | "custom";

export interface MockUser {
  id: string;
  email: string;
  password: string;
  name: string;
  subscription: BillingPlan | null;
}

export interface BillingPlan {
  id: subscriptionId;
  name: string;
  price: number;
  description: string;
  features: string[];
}
