import React from "react";
import "./ImageGalleryItem.css";

const ImageGalleryItem = ({ imageInfo }) => {
  // console.log(imageInfo);
  return (
    <li className="ImageGalleryItem">
      <img
        src={imageInfo.webformatURL}
        alt={imageInfo.tags}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
