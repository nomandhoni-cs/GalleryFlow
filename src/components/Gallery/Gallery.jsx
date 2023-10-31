import { useState } from "react";
import images from "../../data/images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Gallery.css";

const Gallery = () => {
  const [imagesInGallery, setImagesInGallery] = useState(images);

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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="gallery" direction="horizontal">
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
                        <img alt={image.title} src={image.src} />
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
