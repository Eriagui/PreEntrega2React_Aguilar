import { useState, useEffect } from "react";
import { getProductById } from "../services/products";

export const useProductsById = (id) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        console.log("res.data.product");
        console.log(res.data.product);
        setProductData(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { productData, loading };
};
