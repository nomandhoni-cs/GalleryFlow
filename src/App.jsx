import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import photos from "./data/images.json";

function App() {
  const [items, setItems] = useState(photos);
  const [selectedImages, setSelectedImages] = useState([]);
  return (
    <>
      <Gallery
        items={items}
        setItems={setItems}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      />
    </>
  );
}

export default App;
