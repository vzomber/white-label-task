export interface MockUser {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface BillingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}
