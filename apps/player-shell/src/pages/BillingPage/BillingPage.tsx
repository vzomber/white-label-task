import { Link } from "react-router";

export const BillingPage = () => {
  return (
    <div>
      <h1>Billing Page</h1>
      <p>Manage your billing information and view invoices.</p>

      <Link to="/">Go to Home Page</Link>
      <br />
      <Link to="/auth/login">Go to Login Page</Link>
    </div>
  );
};
