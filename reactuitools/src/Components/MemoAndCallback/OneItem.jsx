
import React, {memo} from "react";

export const OneItem = ({id, title, status, color, handleToggle }) => {
  return (
    <>
      <tr className="fs-4" style={{ color }}>
        <td>{`${title}`}</td>
        <td>{`${status}`}</td>
        <td>
          <button
            onClick={() => handleToggle(handleToggle)}
            className="btn btn-primary"
          >
            Mark Done
          </button>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
};

export const MemoisedTodoItem = memo(OneItem);

