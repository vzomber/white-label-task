import { queryClient } from "../../main";
import { mockUsers, type MockUser } from "../../mocks";
import { CommonQueryKeys } from "../../query";
import { delay } from "../utilities";
import type { LoginPayload } from "./types";

export const identityApi = {
  login: async ({ email, password }: LoginPayload) => {
    await delay(500);

    const user = mockUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  },
  getUser: async () => {
    await delay(500);

    const user = queryClient.getQueryData<MockUser>([
      CommonQueryKeys.CURRENT_USER,
    ]);

    return user ?? null;
  },
};
