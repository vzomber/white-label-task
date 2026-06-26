import type { TenantProviderProps } from "./types";
import { TenantContext } from "./TenantContext";

export const TenantProvider = ({ children, value }: TenantProviderProps) => (
  <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
);
