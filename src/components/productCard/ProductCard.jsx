import styles from "./ProductCard.module.css";

function ProductCard({ name, image, price }) {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.img} />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.p}>{price}</p>
    </div>
  );
}

export default ProductCard;
