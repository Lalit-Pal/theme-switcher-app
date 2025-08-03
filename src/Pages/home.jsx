import { useCallback, useEffect, useState } from "react";
import MasterLayout from "../Layouts/masterLayout";
import { useNavigate } from "react-router";
import styles from "./home.module.css";
import { useSelector } from "react-redux";

const HomePage = () => {
  const selectedTheme = useSelector(
    (state) => state?.themeSelector?.selectedTheme
  );
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [productCatgories, setProductCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchProductCateogires = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products/categories");
      if (response.ok) {
        const result = await response.json();
        setLoading(false);
        setProductCategories(result);
      }
    } catch (error) {
      setLoading(false);
      console.error("Unable to fetch product categories-", error);
    }
  }, []);

  const fetchProducts = useCallback(async (selectedCategory) => {
    try {
      setLoading(true);
      const url = selectedCategory
        ? `https://dummyjson.com/products/category/${selectedCategory}`
        : "https://dummyjson.com/products";
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setLoading(false);
        setProducts(result?.products);
      }
    } catch (error) {
      setLoading(false);
      console.error("Unable to fetch products-", error);
    }
  }, []);

  useEffect(() => {
    fetchProductCateogires();
    fetchProducts();
  }, [fetchProductCateogires, fetchProducts]);

  return (
    <MasterLayout>
      <div className={styles[selectedTheme]}>
        <div className={styles.introSection}>
          <h2 className={styles.heading}>Home</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde magni
            deleniti assumenda iure eligendi repellendus, aut nam odit amet.
            Optio suscipit id illum soluta voluptas architecto accusamus sit
            molestiae accusantium?
          </p>
          <button
            className={styles.knowMoreBtn}
            onClick={() => navigate("/about")}
          >
            Know More
          </button>
        </div>

        {loading && <p className={styles.loadingText}>Loading...</p>}

        <div className={styles.categoryGrid}>
          {!loading &&
            productCatgories.length !== 0 &&
            productCatgories.map((category) => (
              <button
                className={styles.categoryBtn}
                onClick={() => {
                  fetchProducts(category?.name);
                }}
                key={`productCategory_${category?.name}`}
              >
                {category?.name}
              </button>
            ))}
        </div>

        <div className={styles.productGrid}>
          {!loading &&
            products.length !== 0 &&
            products?.map((product) => (
              <div className={styles.productCard} key={`product_${product.id}`}>
                <img
                  className={styles.productImage}
                  src={product.images[0]}
                  alt={product.title}
                />
                <p className={styles.productTitle}>{product.title}</p>
              </div>
            ))}
        </div>
      </div>
    </MasterLayout>
  );
};

export default HomePage;
