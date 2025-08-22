import styles from "../main/Main.module.css";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../context/cartContext";
import axios from "axios";
import banner from "../../assets/pngs/banner.png";
import ProductCard from "../../components/productCard/ProductCard";

function Main() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(`${BASE_URL}/productData`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error occurred when fetching products: ", error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      {/* <News /> */}/
      <div className={styles.productList}>
        <img className={styles.banner_img} src={banner} alt="" />
      </div>
      <h1>Products</h1>
      <div>
        {products.map(({ id, name, image, price }) => {
          return (
            <div key={id} className={styles.productCard}>
              <h3>{name}</h3>
              <img src={image} alt={name} />
              <p>Price: {price}</p>
            </div>
          );
          <ProductCard />;
        })}
      </div>
    </main>
  );
}
export default Main;
