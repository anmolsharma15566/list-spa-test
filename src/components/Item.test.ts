import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Item } from './Item';

const itemProps = {
  id: 1,
  title: 'Test Item',
  thumbnailUrl: 'test.jpg',
  onAddToFavorites: jest.fn(),
  isFavorite: false,
};

describe('Item Component', () => {
  it('renders correctly with given props', () => {
    const { getByText, getByAltText } = render(<Item {...itemProps} />);
    expect(getByText(`ID: ${itemProps.id}`)).toBeInTheDocument();
    expect(getByText(`Title: ${itemProps.title}`)).toBeInTheDocument();
    expect(getByAltText(itemProps.title)).toBeInTheDocument();
    expect(getByText('Add to Favorites')).toBeInTheDocument();
  });

  it('calls onAddToFavorites when the button is clicked', () => {
    const { getByText } = render(<Item {...itemProps} />);
    fireEvent.click(getByText('Add to Favorites'));
    expect(itemProps.onAddToFavorites).toHaveBeenCalledTimes(1);
  });

  it('displays "Remove from Favorites" when isFavorite is true', () => {
    const { getByText, rerender } = render(<Item {...itemProps} />);
    rerender(<Item {...itemProps} isFavorite={true} />);
    expect(getByText('Remove from Favorites')).toBeInTheDocument();
  });
});
