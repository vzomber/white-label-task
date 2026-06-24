import { Link } from "react-router";
import { useTenant } from "../../TenantContext";
import { Header } from "../../components";
import { PAGES_URL } from "../../router";

export const HomePage = () => {
  const { brandId } = useTenant();

  return (
    <div>
      <Header>Home Page</Header>
      <p>Welcome to the home page of the player shell app.</p>

      <div>{`BrandId: ${brandId}`}</div>
      <Link to={PAGES_URL.LOGIN} className="block">
        Go to Login Page
      </Link>
      <Link to={PAGES_URL.BILLING}>Go to Billing Page</Link>
    </div>
  );
};
