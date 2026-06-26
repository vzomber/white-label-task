import { queryClient } from "../../main";
import { mockBillingPlans, type MockUser } from "../../mocks";
import { CommonQueryKeys } from "../../query";
import { delay } from "../utilities";
import type { GetSubscriptionProps } from "./types";

export const billingApi = {
  createCustomSubscription: async (planDetails: GetSubscriptionProps) => {
    await delay(500);

    return {
      id: planDetails.id ?? "custom",
      name: planDetails.name ?? "Custom",
      description: planDetails.description ?? "Custom subscription",
      price: planDetails.price ?? 0,
      features: planDetails.features ?? [],
    };
  },
  getSubscriptionById: async (id: string) => {
    await delay(500);

    const plan = mockBillingPlans.find((plan) => plan.id === id);

    if (!plan) {
      throw new Error("Cannot find subscription plan with the given ID");
    }

    return plan;
  },
  cancelSubscription: async () => {
    await delay(500);

    const user = queryClient.getQueryData<MockUser>([
      CommonQueryKeys.CURRENT_USER,
    ]);

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser: MockUser = {
      ...user,
      subscription: null,
    };

    return updatedUser;
  },
};
