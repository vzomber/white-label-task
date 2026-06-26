import { useMutation } from "@tanstack/react-query";
import { billingApi } from "../../../api/billingApi";

export const useCancelSubscription = () =>
  useMutation({
    mutationFn: () => billingApi.cancelSubscription(),
  });
