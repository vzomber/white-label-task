import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { BrandButton } from "@themes/theme-tenant-alpha";
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto mt-8 p-4 border rounded-xl">
        <p className="text-xl text-white -mx-4 -mt-4 p-4 rounded-t-lg bg-black mb-4 font-semibold">
          Please enter your credentials
        </p>
        <div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex justify-between mr-30">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="border rounded"
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="flex justify-between mr-30">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="border rounded"
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
              />
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
