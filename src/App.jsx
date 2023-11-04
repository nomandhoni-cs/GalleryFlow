import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import photos from "./data/images.json";
import Navbar from "./components/Navbar/Navbar";
import SelectionDelete from "./components/SelectionDelete/SelectionDelete";

function App() {
  const [items, setItems] = useState(photos);
  const [selectedImages, setSelectedImages] = useState([]);
  function handleDeleteSelectedImages() {
    setItems((items) => items.filter((url) => !selectedImages.includes(url)));
    setSelectedImages([]);
  }
  return (
    <>
      <div className="container">
        <Navbar />
        {selectedImages.length ? (
          <SelectionDelete
            selectedImages={selectedImages}
            handleDeleteSelectedImages={handleDeleteSelectedImages}
          />
        ) : (
          <h3 className="gallery-text">Gallery</h3>
        )}
        <hr />
        <Gallery
          items={items}
          setItems={setItems}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </div>
    </>
  );
}

export default App;
