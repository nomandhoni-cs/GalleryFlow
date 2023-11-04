import { useState } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import "./Gallery.css";

import { GridLayout } from "../GridLayout/GridLayout";
import { SinglePhoto } from "../SinglePhoto/SinglePhoto";
import { ReorderablePhoto } from "../ReorderablePhoto/ReorderablePhoto";

const Gallery = ({ items, setItems, selectedImages, setSelectedImages }) => {
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  function handleSelectImage(imageUrl) {
    setSelectedImages((selectedImages) => [...selectedImages, imageUrl]);
  }

  function handleDeselectImage(imageUrl) {
    setSelectedImages((selectedImages) =>
      selectedImages.filter((url) => url !== imageUrl)
    );
  }

  return (
    <div className="gallery-container">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <GridLayout>
            {items.map((url, index) => (
              <ReorderablePhoto
                key={url}
                url={url}
                index={index}
                selected={selectedImages.includes(url)}
                onSelect={handleSelectImage}
                onDeselect={handleDeselectImage}
              />
            ))}
          </GridLayout>
        </SortableContext>

        <DragOverlay
          style={{
            border: "1px solid gray",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          adjustScale={true}
          dropAnimation={{
            duration: 500,
            easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
          }}
        >
          {activeId ? (
            <SinglePhoto url={activeId} index={items.indexOf(activeId)} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
};

export default Gallery;
