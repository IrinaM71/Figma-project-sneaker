import { useCart } from "../../context/cartContext";
import styles from "../cartCard/CartCard.module.css";

function CartCard({ product }) {
  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className={styles.cartCardImg}
      />
      <h3>{product.name}</h3>
      <div>
        Price: <p>{product.price} Евро</p>
      </div>
      <button onClick={handleRemove}>Удалить</button>
    </div>
  );
}

export default CartCard;
