import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { BrandButton } from "@themes/theme-tenant-alpha";
import { Header } from "../../components";
import { useLogin } from "../../query";
import { queryClient } from "../../main";
import { PAGES_URL } from "../../router";
import type { LoginFormValues } from "./types";
import { mockUsers } from "../../mocks";

export const LoginPage = () => {
  const { mutate: handleLogin } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: mockUsers[0].email,
      password: mockUsers[0].password,
    },
  });

  const onSubmit = (values: LoginFormValues) => {
    handleLogin(values, {
      onSuccess: (user) => {
        queryClient.setQueryData(["current-user"], user);
        navigate(PAGES_URL.HOME);
        console.log("Login successful. Redirecting to home page.");
      },
      onError: (error) => {
        console.error("Login failed:", error);
      },
    });
  };

  return (
    <div>
      <Header>Login Page</Header>

      <div className="w-full max-w-md mx-auto mt-8 p-4 border rounded-xl">
        <p className="text-xl mb-4 font-semibold">
          Please enter your credentials to log in
        </p>
        <div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label>
                Email
                <input
                  className="ml-2 border rounded"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </label>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label>
                Password
                <input
                  className="ml-2 border rounded"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </label>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <BrandButton type="submit" disabled={isSubmitting}>
              Login
            </BrandButton>
          </form>
        </div>
      </div>
    </div>
  );
};
