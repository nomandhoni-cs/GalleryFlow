import { useState } from "react";
import images from "../../data/images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Gallery.css";

const Gallery = () => {
  const [imagesInGallery, setImagesInGallery] = useState(images);
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  const onDeleteSelectedImages = () => {
    // Remove selected images from the gallery
    setImagesInGallery(
      imagesInGallery.filter((image) => !selectedImages.includes(image.id))
    );
    // Clear the selection
    setSelectedImages([]);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return; // No valid drop target
    }

    const items = Array.from(imagesInGallery);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setImagesInGallery(items);
  };

  return (
    <div className="gallery-container">
      <div className="selection-bar">
        <span>Selected: {selectedImages.length}</span>
        {selectedImages.length > 0 && (
          <button onClick={onDeleteSelectedImages}>Delete Selected</button>
        )}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="gallery">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="grid"
            >
              {imagesInGallery.map((image, index) => {
                return (
                  <Draggable
                    key={image.id}
                    draggableId={`image-${image.id}`}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`grid-item ${
                          index === 0 ? "feature-gallery" : ""
                        }`}
                      >
                        <img
                          alt={image.title}
                          src={image.src}
                          onClick={() => toggleImageSelection(image.id)}
                        />
                        {selectedImages.includes(image.id) && (
                          <div className="image-checkbox">✓</div>
                        )}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
