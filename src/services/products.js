import axios from "axios";

export async function getAllProducts() {
  /*return await axios.get("https://dummyjson.com/products");*/
  return await axios.get("https://fakestoreapi.in/api/products?limit=150");
}

export async function getProductById(id) {
  /*return await axios.get(`https://dummyjson.com/product/${id}`);*/
  return await axios.get(`https://fakestoreapi.in/api/products/${id}`);
}

export async function getProductByCat(cat) {
  console.log((`https://fakestoreapi.in/api/products/category?type=${cat}`));
  return await axios.get(`https://fakestoreapi.in/api/products/category?type=${cat}`);
}

export async function getAllCategories() {
  return await axios.get(`https://fakestoreapi.in/api/products/category`);
}