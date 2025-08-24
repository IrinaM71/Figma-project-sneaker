import styles from "./Cart.module.css";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard/CartCard";

function Cart() {
  const { CartItems } = useCart();
  const totalPrice = CartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <div className={styles.cart}>
      <h2 className={styles.title}>Корзина</h2>
      {CartItems.length === 0 ? (
        <p>Зднсь пока ничего нет.</p>
      ) : (
        <>
          <div>
            {CartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>
          <div>Цена: {totalPrice.toLocaleString("eu-EU")}EUR</div>
        </>
      )}
    </div>
  );
}

export default Cart;
