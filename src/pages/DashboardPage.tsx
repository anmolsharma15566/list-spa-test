import { Link } from "react-router-dom";
import { ListItem } from "../components/ListItem";
import { Item, ItemProps } from "../components/Item";

interface DashboardPageProps {
  favorites: ItemProps[];
  onAddToFavorites: (id: number) => void;
}

const DashboardPage = ({ favorites, onAddToFavorites }: DashboardPageProps) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/list">Go to List</Link>
      <ListItem>
        {favorites.map(({ id, title, thumbnailUrl, isFavorite }) => (
          <Item
            key={id}
            id={id}
            title={title}
            thumbnailUrl={thumbnailUrl}
            onAddToFavorites={() => onAddToFavorites(id)}
            isFavorite={isFavorite}
          />
        ))}
      </ListItem>
    </div>
  );
};

export default DashboardPage;
