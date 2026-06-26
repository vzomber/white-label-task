import { BrandButton } from "../BrandButton";

export interface BrandCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  Button: typeof BrandButton;
}
