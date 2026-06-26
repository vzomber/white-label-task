import { BrandButton, BrandCard } from "@themes/theme-tenant-alpha";
import { mockBillingPlans, type MockUser } from "../../../mocks";
import { CustomAmountForm } from "./CustomAmountForm";
import { CommonQueryKeys, useGetSubscriptionById } from "../../../query";
import { queryClient } from "../../../main";

export const SubscriptionOptions = () => {
  const { mutate: getSubscription, isPending } = useGetSubscriptionById();

  const handleGetSubscription = (subscriptionId: string) => {
    getSubscription(subscriptionId, {
      onSuccess: (billingData) => {
        queryClient.setQueryData(
          [CommonQueryKeys.CURRENT_USER],
          (oldData: MockUser) => ({
            ...oldData,
            subscription: {
              ...oldData.subscription,
              ...billingData,
            },
          }),
        );
      },
    });
  };

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
            price={plan.price}
            title={plan.name}
            Button={() => (
              <BrandButton
                onClick={() => handleGetSubscription(plan.id)}
                isLoading={isPending}
              >
                {"Choose plan"}
              </BrandButton>
            )}
          />
        ))}
      </div>

      <CustomAmountForm />
    </div>
  );
};
