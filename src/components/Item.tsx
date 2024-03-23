import React from "react";

export interface ItemProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  onAddToFavorites: () => void;
  isFavorite: boolean;
}

export const Item: React.FC<ItemProps> = ({
  id,
  title,
  thumbnailUrl,
  onAddToFavorites,
  isFavorite,
}) => {
  return (
    <div className="item-container">
      <div>ID: {id}</div>
      <div className="item-title">Title: {title}</div>
      <img className="item-image" src={thumbnailUrl} alt={title} />
      <button className="item-button" onClick={onAddToFavorites}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};
