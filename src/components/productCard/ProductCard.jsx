import styles from "./ProductCard.module.css";
import { useCart } from "../../context/cartContext";
import PlusIcon from "../../assets/icons/Plus.svg";
import PlusBlackIcon from "../../assets/icons/PlusBlack.svg";
import { useState } from "react";

function ProductCard({ name, image, price }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ name, image, price });
    setAdded(!added);
  };

  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.img} />
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.price}>
        <span>Цена:</span>
        <br />
        <p className={styles.p}>{price}</p>
        <img
          src={added ? PlusBlackIcon : PlusIcon}
          alt=""
          className={styles.plusIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ProductCard;
