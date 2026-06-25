import { useQuery } from "@tanstack/react-query";
import { identityApi } from "../../../api";

export const useGetCurrentUser = () =>
  useQuery({
    queryKey: ["current-user"],
    queryFn: () => identityApi.getUser(),
    retry: false,
    staleTime: Infinity,
  });
