import { BrandButton } from "@themes/theme-tenant-alpha";
import { useForm } from "react-hook-form";
import { queryClient } from "../../../main";
import { CommonQueryKeys, useCustomSubscription } from "../../../query";
import type { BillingPlan, MockUser } from "../../../mocks";
import { delay } from "../../../api/utilities";
import type { BillingAmountForm } from "./types";

export const CustomAmountForm = () => {
  const {
    mutate: createCustomSubscription,
    error,
    isPending,
  } = useCustomSubscription();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingAmountForm>();

  const onSubmit = async (formData: BillingAmountForm) => {
    await delay(500);

    const updateData: Partial<BillingPlan> = {
      id: "custom",
      name: "Custom",
      description: "Custom subscription",
      price: formData.amount,
      features: ["Very special treatment"],
    };

    createCustomSubscription(updateData, {
      onSuccess: (data) => {
        updateCurrentUserSubscription(data);
      },
    });
  };

  const updateCurrentUserSubscription = (subscriptionData: BillingPlan) => {
    queryClient.setQueryData(
      [CommonQueryKeys.CURRENT_USER],
      (oldData: MockUser) => ({
        ...oldData,
        subscription: {
          ...oldData.subscription,
          customAmount: subscriptionData.price,
          ...subscriptionData,
        },
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-w-sm">
      <label
        className="block text-sm font-medium text-text"
        htmlFor="custom-amount"
      >
        Amount
      </label>

      <input
        id="custom-amount"
        aria-invalid={!!errors.amount}
        type="number"
        placeholder="Enter amount"
        className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-text outline-none focus:border-primary"
        {...register("amount", {
          valueAsNumber: true,
          required: "Amount is required",
          min: {
            value: 0,
            message: "Amount cannot be negative",
          },
          max: {
            value: 200,
            message: "Amount cannot be bigger than 200",
          },
        })}
      />

      {(errors.amount || error) && (
        <p className="mt-2 text-sm text-red-500">
          {errors?.amount?.message || error?.message}
        </p>
      )}

      <div className="mt-4">
        <BrandButton isLoading={isPending} type="submit">
          Pay custom amount
        </BrandButton>
      </div>
    </form>
  );
};
