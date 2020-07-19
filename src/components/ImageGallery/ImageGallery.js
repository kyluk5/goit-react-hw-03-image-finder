import React from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import "./ImageGallery.css";

const ImageGallery = ({ data }) => {
  return (
    <ul className="ImageGallery">
      {data.map((item) => (
        <ImageGalleryItems key={item.id} imageInfo={item} />
      ))}
    </ul>
  );
};

export default ImageGallery;
