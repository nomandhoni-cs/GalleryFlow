import { useState } from "react";
import "./App.css";
import images from "./data/images";
// const images = [
//   { id: 1, src: "./assets/images/image-1.webp" },
//   { id: 2, src: "./assets/images/image-2.webp" },
//   { id: 3, src: "./assets/images/image-3.webp" },
//   { id: 4, src: "./assets/images/image-4.webp" },
//   { id: 5, src: "./assets/images/image-5.webp" },
//   { id: 6, src: "./assets/images/image-6.webp" },
//   { id: 7, src: "./assets/images/image-7.webp" },
//   { id: 8, src: "./assets/images/image-8.webp" },
//   { id: 9, src: "./assets/images/image-9.webp" },
//   { id: 10, src: "./assets/images/image-10.webp" },
//   { id: 11, src: "./assets/images/image-11.webp" },
// ];

function App() {
  const [count, setCount] = useState(0);
  const [imagesInGallery, setImagesInGallery] = useState(images);
  console.log(imagesInGallery);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {imagesInGallery &&
        imagesInGallery.map((image) => (
          <img className="gallery" src={image.src} alt="" />
        ))}
    </>
  );
}

export default App;
