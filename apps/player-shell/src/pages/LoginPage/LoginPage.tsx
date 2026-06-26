import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { BrandButton } from "@themes/theme-tenant-alpha";
import { CommonQueryKeys, queryClient, useLogin } from "../../query";
import { PAGES_URL } from "../../router";
import { mockUsers } from "../../mocks";
import type { LoginFormValues } from "./types";

export const LoginPage = () => {
  const { mutate: handleLogin, isPending, error: loginError } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValues,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();

  const onSubmit = (values: LoginFormValues) => {
    handleLogin(values, {
      onSuccess: (user) => {
        queryClient.setQueryData([CommonQueryKeys.CURRENT_USER], user);
        navigate(PAGES_URL.HOME);
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md mx-auto p-4 border rounded-xl">
        <p className="text-xl text-white -mx-4 -mt-4 p-4 rounded-t-lg bg-black mb-4 font-semibold">
          Please enter your credentials
        </p>
        <div>
          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="flex justify-between mr-30">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  className="border rounded"
                  type="email"
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <div className="flex justify-between mr-30">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  className="border rounded"
                  type="password"
                  aria-invalid={!!errors.password}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            {loginError && (
              <p className="text-xs text-red-500">
                {loginError.message || "Login failed"}
              </p>
            )}

            <div className="flex justify-center items-center gap-3 mt-4 w-full">
              <BrandButton
                isLoading={isPending}
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </BrandButton>
              <button
                type="button"
                className="bg-red-500 px-3 py-1.5 rounded-md cursor-pointer text-sm text-white hover:bg-red-600"
                onClick={() =>
                  setValues({
                    email: mockUsers[0].email,
                    password: mockUsers[0].password,
                  })
                }
              >
                Autofill
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
