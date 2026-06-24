import { Link } from "react-router";
import { Header } from "../../components";
import { PAGES_URL } from "../../router";

export const BillingPage = () => {
  return (
    <div>
      <Header>Billing Page</Header>
      <p>Manage your billing information and view invoices.</p>

      <Link to={PAGES_URL.HOME}>Go to Home Page</Link>
      <br />
      <Link to={PAGES_URL.LOGIN}>Go to Login Page</Link>
    </div>
  );
};
