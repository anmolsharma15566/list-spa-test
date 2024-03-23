import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ListPage from "./pages/ListPage";
import "./styles.scss";
import { ItemProps } from "./components/Item";

const App: React.FC = () => {
  const [favorites, setFavorites] = useState<ItemProps[]>([]);
  const [items, setItems] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchItems = async () => {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`,
      );
      let data = await response.json();
      setItems((prev) => {
        return [...prev, ...data];
      });
    };

    fetchItems();
  }, [page]);

  const handleAddToFavorites = (id: number) => {
    const itemToAdd = items.find((item) => item.id === id);
    if (!itemToAdd) return;

    if (favorites.some((favItem) => favItem.id === id)) {
      setFavorites(favorites.filter((favItem) => favItem.id !== id));
    } else {
      setFavorites([...favorites, { ...itemToAdd, isFavorite: true }]);
    }
  };

  const handleListScroll = (page: number): void => {
    setPage(page);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardPage
            favorites={favorites}
            onAddToFavorites={handleAddToFavorites}
          />
        }
      />
      <Route
        path="/list"
        element={
          <ListPage
            favorites={favorites}
            items={items}
            onAddToFavorites={handleAddToFavorites}
            onScroll={handleListScroll}
            page={page}
          />
        }
      />
    </Routes>
  );
};

export default App;
