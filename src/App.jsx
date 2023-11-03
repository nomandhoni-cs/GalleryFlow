import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import photos from "./data/images.json";

function App() {
  const [items, setItems] = useState(photos);
  return (
    <>
      <Gallery items={items} setItems={setItems} />
    </>
  );
}

export default App;
