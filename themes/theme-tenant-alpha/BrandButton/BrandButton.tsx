import styles from "./BrandButton.module.css";
import { ButtonProps } from "./types";

export const BrandButton = ({ children, onClick, isLoading }: ButtonProps) => (
  <button
    className={styles.BrandButton}
    onClick={isLoading ? () => null : onClick}
  >
    {isLoading ? "Loading..." : children}
  </button>
);
