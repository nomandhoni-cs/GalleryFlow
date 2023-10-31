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
          title={image.title}
          src={image.src}
          alt=""
        />
      ))}
    </>
  );
};

export default Gallery;
