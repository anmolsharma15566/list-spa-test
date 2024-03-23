import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ListPage  from './ListPage';

const items = [
  { id: 1, title: 'Item 1', thumbnailUrl: 'item1.jpg' },
  { id: 2, title: 'Item 2', thumbnailUrl: 'item2.jpg' },
];

const favorites = [
  { id: 1, title: 'Item 1', thumbnailUrl: 'item1.jpg' },
];

const onAddToFavoritesMock = jest.fn();
const onScrollMock = jest.fn();

describe('ListPage Component', () => {
  it('renders correctly with given props', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ListPage items={items} favorites={favorites} onAddToFavorites={onAddToFavoritesMock} onScroll={onScrollMock} page={1} />
      </Router>
    );
    expect(getByText('List Page')).toBeInTheDocument();
    expect(getByText('Go Back')).toBeInTheDocument();
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
    expect(getByAltText('Item 1')).toBeInTheDocument();
    expect(getByAltText('Item 2')).toBeInTheDocument();
  });

  it('calls onAddToFavorites with correct id when Add to Favorites button is clicked', () => {
    const { getByText } = render(
      <Router>
        <ListPage items={items} favorites={favorites} onAddToFavorites={onAddToFavoritesMock} onScroll={onScrollMock} page={1} />
      </Router>
    );
    fireEvent.click(getByText('Add to Favorites'));
    expect(onAddToFavoritesMock).toHaveBeenCalledWith(1);
  });
});
