import { useMutation } from "@tanstack/react-query";
import { billingApi } from "../../../api/billingApi";

export const useCustomSubscription = () =>
  useMutation({
    mutationFn: billingApi.createCustomSubscription,
  });
