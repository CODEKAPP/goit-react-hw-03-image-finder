//ImageGalleryItem.jsx
import React from 'react';
import { ItemList, ImgList } from './Styles/UlStyle';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleImageClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <ItemList className="gallery-item" onClick={handleImageClick}>
      <ImgList src={image.webformatURL} alt={image.tags} />
    </ItemList>
  );
};

export default ImageGalleryItem;
