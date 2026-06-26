import { useMutation } from "@tanstack/react-query";
import { billingApi } from "../../../api/billingApi";

export const useGetSubscriptionById = () =>
  useMutation({
    mutationFn: billingApi.getSubscriptionById,
  });
