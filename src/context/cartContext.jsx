import { createContext, useContext, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState([]);

  const addToCart = async (item) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/Products/${item.id}`);
      if (data.quantity > 0) {
        await axios.put(`${BASE_URL}/Products/{item.id}`, {
          ...data,
          quantity: data.quantity - 1,
        });
        setCartItems((prev) => [...prev, item]);
      } else {
        console.log("Товара нет в наличии");
      }
    } catch (error) {
      console.log("Ошибка добавления", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/Products/${id}`);

      await axios.put(`${BASE_URL}/Products/${id}`, {
        ...data,
        quantity: data.quantity + 1,
      });

      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error removing from cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ CartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;

export const useCart = () => useContext(CartContext);
