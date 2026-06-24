import { Link } from "react-router";
import { Header } from "../../components";
import { PAGES_URL } from "../../router";

export const LoginPage = () => {
  return (
    <div>
      <Header>Login Page</Header>
      <p>Welcome to the login page of the player shell app.</p>
      <p>Please enter your credentials to log in.</p>

      <Link to={PAGES_URL.HOME}>Go to Home Page</Link>
      <br />
      <Link to={PAGES_URL.BILLING}>Go to Billing Page</Link>
    </div>
  );
};
