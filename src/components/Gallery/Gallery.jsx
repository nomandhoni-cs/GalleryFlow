import { useState } from "react";
import images from "../../data/images";

const Gallery = () => {
  const [imagesInGallery, setImagesInGallery] = useState(images);
  return (
    <>
      <div>Gallery</div>
      {imagesInGallery.map((image) => (
        <img
          key={image.id}
          className="gallery"
          alt={image.title}
          src={image.src}
        />
      ))}
    </>
  );
};

export default Gallery;
