import { useState } from "react";
import "./ImageUpload.css";
import { BsCardImage } from "react-icons/bs"; // Import the image icon

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert("This feature is coming soon!"); // Show alert for future feature
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="image-upload">
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" className="selected-image" />
      ) : (
        <div className="image-placeholder">
          <BsCardImage className="image-icon" />
          <p className="add-text">Add Images</p>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
