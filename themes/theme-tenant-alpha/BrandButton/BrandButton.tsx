import styles from "./BrandButton.module.css";
import { ButtonProps } from "./types";

export const BrandButton = ({ children, onClick }: ButtonProps) => (
  <button className={styles.BrandButton} onClick={onClick}>
    {children}
  </button>
);
