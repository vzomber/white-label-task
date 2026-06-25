export interface BrandCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  onSelect: () => void;
}
