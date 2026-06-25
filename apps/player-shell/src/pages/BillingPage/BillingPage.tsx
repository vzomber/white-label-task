import { Header } from "../../components";
import { billingPlans } from "../../mocks";
import { BrandCard } from "@themes/theme-tenant-alpha";

export const BillingPage = () => {
  return (
    <div>
      <Header />
      <section className="max-w-5xl mx-auto space-y-8 p-4">
        <div>
          <h1 className="text-2xl font-semibold text-text">Billing</h1>
          <p className="mt-2 text-sm text-text-muted">
            Choose a plan or enter a custom billing amount.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {billingPlans.map((plan) => (
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

        <div className="rounded-brand border border-border bg-surface p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-text">Custom payment</h2>
          <p className="mt-2 text-sm text-text-muted">
            Enter a custom billing amount for this tenant.
          </p>
          <div className="mt-6 max-w-sm">
            <label className="block text-sm font-medium text-text">
              Amount
            </label>
            <input
              type="number"
              min="1"
              placeholder="Enter amount"
              className="mt-2 w-full rounded-brand border border-border bg-background px-3 py-2 text-text outline-none focus:border-primary"
            />
            <button className="mt-4 w-full rounded-brand bg-primary px-4 py-2 text-sm font-medium text-white hover:opacity-90">
              Pay custom amount
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
