import React from 'react';
import ReactDOM from 'react-dom';
import PhotoItem from '../../frontend/components/photos/photo_item';

describe('PhotoItem', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PhotoItem />, div);
  });
});
