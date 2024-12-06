import styles from "./card.module.css";

export const Card = ({name, description, price}) => {
  return (
    <div className={styles.card}>
      <h2>{name ?? "Товар"}</h2>

      <p>{description ?? "В разработке"}</p>

      <p>
        <span>{price ?? 0}</span>$
      </p>
    </div>
  );
};
