import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { ListItem } from "../components/ListItem";
import { Item, ItemProps } from "../components/Item";

interface ListPageProps {
  items: ItemProps[];
  favorites: ItemProps[];
  onAddToFavorites: (id: number) => void;
  onScroll: (page: number) => void;
  page: number;
}

const ListPage = ({
  items,
  favorites,
  onAddToFavorites,
  onScroll,
  page,
}: ListPageProps) => {
  const fetchData = () => {
    onScroll(page + 1);
  };

  return (
    <div>
      <InfiniteScroll
        dataLength={items?.length}
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.9}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have reached to the bottom</b>
          </p>
        }
      >
        <div>
          <h1>List Page</h1>
          <Link to="/">Go Back</Link>
          <ListItem>
            {items?.map((item) => (
              <Item
                key={item.id}
                id={item.id}
                title={item.title}
                thumbnailUrl={item.thumbnailUrl}
                onAddToFavorites={() => onAddToFavorites(item.id)}
                isFavorite={favorites.some((favItem) => favItem.id === item.id)}
              />
            ))}
          </ListItem>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ListPage;
