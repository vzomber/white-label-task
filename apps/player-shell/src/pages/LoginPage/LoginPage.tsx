import { Link } from "react-router";

export const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Welcome to the login page of the player shell app.</p>
      <p>Please enter your credentials to log in.</p>

      <Link to="/">Go to Home Page</Link>
      <br />
      <Link to="/account/billing">Go to Billing Page</Link>
    </div>
  );
};
