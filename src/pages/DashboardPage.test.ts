import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardPage from './DashboardPage';

const favorites = [
  { id: 1, title: 'Favorite 1', thumbnailUrl: 'fav1.jpg', isFavorite: true },
  { id: 2, title: 'Favorite 2', thumbnailUrl: 'fav2.jpg', isFavorite: true },
];

const onAddToFavoritesMock = jest.fn();

describe('DashboardPage Component', () => {
  it('renders correctly with given props', () => {
    const { getByText, getByAltText } = render(
      <Router>
        <DashboardPage favorites={favorites} onAddToFavorites={onAddToFavoritesMock} />
      </Router>
    );
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Go to List')).toBeInTheDocument();
    expect(getByText('Favorite 1')).toBeInTheDocument();
    expect(getByText('Favorite 2')).toBeInTheDocument();
    expect(getByAltText('Favorite 1')).toBeInTheDocument();
    expect(getByAltText('Favorite 2')).toBeInTheDocument();
  });

  it('calls onAddToFavorites with correct id when Add to Favorites button is clicked', () => {
    const { getByText } = render(
      <Router>
        <DashboardPage favorites={favorites} onAddToFavorites={onAddToFavoritesMock} />
      </Router>
    );
    fireEvent.click(getByText('Add to Favorites')); // Click the button of first item
    expect(onAddToFavoritesMock).toHaveBeenCalledWith(1);
  });
});
