import { createContext } from "react";
import type { TenantContextValue } from "./types";

// moved out cause Fast refresh only works when a file only exports components
export const TenantContext = createContext<TenantContextValue | null>(null);
