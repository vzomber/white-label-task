import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page of the player shell app.</p>

      <Link to="/auth/login">Go to Login Page</Link>
      <br />
      <Link to="/account/billing">Go to Billing Page</Link>
    </div>
  );
};
