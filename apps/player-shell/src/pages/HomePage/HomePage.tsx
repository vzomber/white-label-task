import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold">Home Page</h1>
      <p>Welcome to the home page of the player shell app.</p>

      <Link to="/auth/login" className="block">
        Go to Login Page
      </Link>
      <Link to="/account/billing">Go to Billing Page</Link>
    </div>
  );
};
