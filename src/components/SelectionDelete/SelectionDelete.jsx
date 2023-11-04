import "./SelectionDelete.css";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const SelectionDelete = ({ selectedImages, handleDeleteSelectedImages }) => {
  return (
    <>
      <div className="selection-delete-container">
        <h3 className="selection-count">
          <BsFillCheckSquareFill
            style={{ color: "#385bda", marginRight: "10px" }}
          />
          {selectedImages.length} Files Selected
        </h3>
        <div className="selection-delete-button">
          <button onClick={handleDeleteSelectedImages}>
            <MdDelete /> <span className="delete-text">Delete Files</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectionDelete;
