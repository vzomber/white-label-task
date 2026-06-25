import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BrandButton = ({ children, ...props }: ButtonProps) => (
  <button className="brand-button" {...props}>
    {children}
  </button>
);
