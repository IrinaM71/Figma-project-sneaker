import { useCart } from "../../context/cartContext";

function CartCard({ product }) {
  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>
        Price: <P>{product.price} Euro</P>
      </div>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}

export default CartCard;
