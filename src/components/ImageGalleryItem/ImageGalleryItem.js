import React from "react";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ imageInfo, largeImg }) => {
  return (
    <li className="ImageGalleryItem" onClick={largeImg}>
      <img
        src={imageInfo.webformatURL}
        alt={imageInfo.tags}
        data-large={imageInfo.largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
