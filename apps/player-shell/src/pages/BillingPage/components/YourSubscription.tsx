import { BrandButton, BrandCard } from "@themes/theme-tenant-alpha";
import { CommonQueryKeys, useCancelSubscription } from "../../../query";
import { queryClient } from "../../../main";
import type { YourSubscriptionProps } from "./types";

export const YourSubscription = ({
  subscriptionPlan,
}: YourSubscriptionProps) => {
  const { mutate: cancelSubscription, isPending } = useCancelSubscription();

  const handleCacelSubscription = () => {
    cancelSubscription(undefined, {
      onSuccess: (updatedUser) => {
        queryClient.setQueryData([CommonQueryKeys.CURRENT_USER], updatedUser);
      },
    });
  };

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
        Button={() => (
          <BrandButton isLoading={isPending} onClick={handleCacelSubscription}>
            {"Cancel Subscription"}
          </BrandButton>
        )}
      />
    </div>
  );
};
