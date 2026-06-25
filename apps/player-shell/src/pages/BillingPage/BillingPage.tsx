import { Header } from "../../components";
import { useGetCurrentUser } from "../../query";
import { SubscriptionOptions, YourSubscription } from "./components";

export const BillingPage = () => {
  const subscriptionPlan = useGetCurrentUser().data?.subscription;

  return (
    <div>
      <Header />
      <section className="max-w-5xl mx-auto space-y-8 p-4">
        {subscriptionPlan ? (
          <YourSubscription subscriptionPlan={subscriptionPlan} />
        ) : (
          <SubscriptionOptions />
        )}
      </section>
    </div>
  );
};
