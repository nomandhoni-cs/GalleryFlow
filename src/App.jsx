import { useState } from "react";
import "./App.css";
import images from "./data/images";

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
