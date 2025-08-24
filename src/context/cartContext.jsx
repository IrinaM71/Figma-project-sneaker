import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [CartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/cartData`);
        setCartItems(data);
      } catch (error) {
        console.log("Ошибка загрузки", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/cartData`, item);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {
      console.log("Ошибка добавления товара", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Ошибка удаления из корзины:", error);
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
