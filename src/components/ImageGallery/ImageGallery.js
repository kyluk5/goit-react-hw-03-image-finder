import React from "react";
import ImageGalleryItems from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import "./ImageGallery.css";

const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <>
      <ul className="ImageGallery">
        {data.map((item) => (
          <ImageGalleryItems key={item.id} imageInfo={item} />
        ))}
      </ul>
      <div className="load_more">{data.length !== 0 && <Button />}</div>
    </>
  );
};

export default ImageGallery;
