import styles from "../main/Main.module.css";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import banner from "../../assets/pngs/banner.png";
import ProductCard from "../../components/productCard/ProductCard";

function Main() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/productData`);

      setProducts(data);
    } catch (error) {
      console.log("Ошбка загрузки товаров:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      <div className={styles.main}>
        <img className={styles.banner_img} src={banner} alt="" />
      </div>
      <h1 className={styles.title}>Товары</h1>
      <div className={styles.grid}>
        {products.map(({ id, name, image, price }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
          />
        ))}
        ;
      </div>
    </main>
  );
}
export default Main;
