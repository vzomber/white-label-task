import { useQuery } from "@tanstack/react-query";
import { identityApi } from "../../../api";
import { CommonQueryKeys } from "..";

export const useGetCurrentUser = () =>
  useQuery({
    queryKey: [CommonQueryKeys.CURRENT_USER],
    queryFn: () => identityApi.getUser(),
    retry: false,
    staleTime: Infinity,
  });
