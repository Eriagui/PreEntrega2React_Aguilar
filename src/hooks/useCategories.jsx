import { useEffect, useState } from "react";
import { getAllCategories } from "../services/products";

export const useCategories = () => {
    const [productsCategories, setProductsCategories] = useState([]);
    console.log("productsCategories");
    console.log(productsCategories);


    useEffect(() => {
        getAllCategories()
            .then((res) => {
                if (res.status === 200) {
                    setProductsCategories(res.data.categories);
                    console.log("res")
                    console.log(res);
                } else {
                    console.log("Error");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return { productsCategories};
};