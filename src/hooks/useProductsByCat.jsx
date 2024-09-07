import { useState, useEffect } from "react";
import { getProductByCat } from "../services/products";

export const useProductsByCat = (cat) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("cat");
    console.log(cat);

    useEffect(() => {
        getProductByCat(cat)
            .then((res) => {
                if (res.status === 200) {
                    console.log("res.data.products")
                    console.log(res.data.products)
                    setProductsData(res.data.products);
                } else {
                    console.log("Error")
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [cat]);

    return { productsData, loading };
};