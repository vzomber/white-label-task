import { Link } from "react-router";
import { Header } from "../../components";
import { PAGES_URL } from "../../router";
import { BrandButton } from "@themes/theme-tenant-alpha";
import { useTenant } from "../../TenantContext";

export const HomePage = () => {
  const { brandId, currency, locale } = useTenant();

  return (
    <>
      <Header />

      <main className="mx-auto flex max-w-5xl flex-col items-center px-6 py-16">
        <section className="max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-text">
            Multi-Tenant Player Shell
          </h1>

          <p className="mt-4 text-lg text-text-muted">
            Demonstration of a white-label architecture with tenant-aware
            branding, reusable UI components and mocked billing flow.
          </p>
        </section>

        <section className="mt-12 w-full max-w-xl rounded-brand border border-border bg-surface p-8 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold text-text">
            Current Tenant
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-text-muted">Brand ID</span>
              <span className="font-medium text-text">{brandId}</span>
            </div>

            <div className="flex justify-between border-b border-border pb-3">
              <span className="text-text-muted">Locale</span>
              <span className="font-medium text-text">{locale}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-text-muted">Currency</span>
              <span className="font-medium text-text">{currency}</span>
            </div>
          </div>
        </section>

        <div className="mt-10">
          <Link to={PAGES_URL.BILLING}>
            <BrandButton>Go to Billing</BrandButton>
          </Link>
        </div>
      </main>
    </>
  );
};
