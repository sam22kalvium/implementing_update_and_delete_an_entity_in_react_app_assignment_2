import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;


function App() {
  const [items, setItems] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch(API_URI)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Delete item function
  const handleDelete = (id) => {
    fetch(`${API_URI}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete item");
        }
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((err) => console.error("Error deleting item:", err));
  };

  return <ItemList items={items} onDelete={handleDelete} />;
}

export default App;
