import { BrandButton } from "../BrandButton";
import styles from "./BrandCard.module.css";
import { BrandCardProps } from "./types";

export const BrandCard = ({
  title,
  description,
  price,
  features,
  onSelect,
}: BrandCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <p className={styles.price}>
        ${price}
        <span className={styles.period}> / month</span>
      </p>

      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>

      <BrandButton onClick={onSelect}>Choose plan</BrandButton>
    </div>
  );
};
