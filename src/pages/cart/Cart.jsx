import styles from "./Cart.module.css";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard/CartCard";

function Cart() {
  const { CartItems } = useCart();
  const totalPrice = CartItems.reduce((total, item) => {
    const price = parseFloat(item.price);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <div className={styles.cart}>
      <h2>Basket</h2>
      {CartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartItems}>
            {CartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>
          <div>Total price: {totalPrice.toLocaleString()}</div>
        </>
      )}
    </div>
  );
}

export default Cart;
