import { BrandButton } from "@themes/theme-tenant-alpha";
import { useForm } from "react-hook-form";
import { queryClient } from "../../../main";
import { CommonQueryKeys } from "../../../query";
import type { MockUser } from "../../../mocks";
import { delay } from "../../../api/utilities";

type BillingAmountForm = {
  amount: number;
};

export const CustomAmountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingAmountForm>();

  const onSubmit = async (data: BillingAmountForm) => {
    await delay(500);
    console.log("Submitted amount:", data.amount);

    queryClient.setQueryData(
      [CommonQueryKeys.CURRENT_USER],
      (oldData: MockUser) => {
        return {
          ...oldData,
          subscription: {
            ...oldData.subscription,
            description: `Custom payment`,
            features: [`Very special treatment`],
            customAmount: data.amount,
          },
        };
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-w-sm">
      <label className="block text-sm font-medium text-text">Amount</label>

      <input
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

      {errors.amount && (
        <p className="mt-2 text-sm text-red-500">{errors.amount.message}</p>
      )}

      <div className="mt-4">
        <BrandButton type="submit">Pay custom amount</BrandButton>
      </div>
    </form>
  );
};
