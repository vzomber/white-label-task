export interface TenantContextValue {
  brandId: string;
  locale: string;
  currency: string;
}

export interface TenantProviderProps {
  children: React.ReactNode;
  value: TenantContextValue;
}
