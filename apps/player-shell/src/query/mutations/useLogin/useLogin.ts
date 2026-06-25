import { useMutation } from "@tanstack/react-query";
import { identityApi } from "../../../api";

export const useLogin = () =>
  useMutation({
    mutationFn: identityApi.login,
  });
