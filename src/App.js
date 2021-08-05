import { useEffect, useState } from "react";
import { getAll, add, remove, edit } from "./api/productAPI";
import "./styles.css";
import Routes from "./routes";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // call api
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  // Thêm sản phẩm
  const onAddHandler = async (item) => {
    try {
      const { data } = await add(item); // tra ve 1 object { data: ..., status: ...}
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  //xoa san pham
  const onRemoveHandler = async (id) => {
    try {
      await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  // item la 1 {}
  const onEditHandler = async (item) => {
    try {
      const { data } = await edit(item);
      const newProducts = products.map((product) =>
        product.id == item.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {}
  };
  // ví dụ: promise
  return (
    <Routes
      products={products}
      onRemove={onRemoveHandler}
      onEdit={onEditHandler}
      onAdd={onAddHandler}
    />
  );
}
