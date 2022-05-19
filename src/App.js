import { useState, useEffect } from "react";
import "./App.css";
import Store from "./components/Store";
import axios from "axios";
function App() {
  const [storeItem, setStoreItem] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      setStoreItem(data);
    });
  }, []);
  return (
    <div>
      <Store
        items={storeItem}
        onItemAdd={(itemData) => {
          setStoreItem([...storeItem, itemData]);
        }}
      />
    </div>
  );
}

export default App;
