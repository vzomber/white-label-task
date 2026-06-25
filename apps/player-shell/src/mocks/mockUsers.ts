import { mockBillingPlans } from "./mockBilling";
import type { MockUser } from "./types";

export const mockUsers: MockUser[] = [
  {
    id: "user-1",
    email: "john.smith@tenant.com",
    password: "password123",
    name: "John Smith",
    subscription: null,
  },
  {
    id: "user-2",
    email: "emma.johnson@tenant.com",
    password: "password123",
    name: "Emma Johnson",
    subscription: mockBillingPlans[0],
  },
  {
    id: "user-3",
    email: "alex.williams@tenant.com",
    password: "password123",
    name: "Alex Williams",
    subscription: mockBillingPlans[1],
  },
];
