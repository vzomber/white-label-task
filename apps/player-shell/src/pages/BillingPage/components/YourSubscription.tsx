import { BrandCard } from "@themes/theme-tenant-alpha";
import type { BillingPlan } from "../../../mocks";

export interface YourSubscriptionProps {
  subscriptionPlan?: BillingPlan;
}

export const YourSubscription = ({
  subscriptionPlan,
}: YourSubscriptionProps) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-text">Billing</h1>
        <p className="mt-2 text-sm text-text-muted">
          Here is your subscription
        </p>
      </div>

      <BrandCard
        title={subscriptionPlan?.name || "No subscription"}
        description={
          subscriptionPlan?.description || "You are not subscribed to any plan."
        }
        price={subscriptionPlan?.price || 0}
        features={subscriptionPlan?.features || []}
        onSelect={() => {}}
      />
    </div>
  );
};
