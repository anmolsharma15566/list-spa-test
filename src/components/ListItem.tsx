import React from "react";

interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return <div className="list-item-container">{children}</div>;
};
