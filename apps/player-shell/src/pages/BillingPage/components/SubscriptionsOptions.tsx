import { BrandCard } from "@themes/theme-tenant-alpha";
import { mockBillingPlans } from "../../../mocks";
import { CustomAmountForm } from "./CustomAmountForm";

export const SubscriptionOptions = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold text-text">Billing</h1>
        <p className="mt-2 text-sm text-text-muted">
          Choose a plan or enter a custom billing amount.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {mockBillingPlans.map((plan) => (
          <BrandCard
            key={plan.id}
            description={plan.description}
            features={plan.features}
            onSelect={() => {}}
            price={plan.price}
            title={plan.name}
          />
        ))}
      </div>

      <CustomAmountForm />
    </div>
  );
};
