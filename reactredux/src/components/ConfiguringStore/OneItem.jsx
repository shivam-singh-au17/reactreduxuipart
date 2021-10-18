import React from "react";

export default function OneItem({
  title,
  status,
  id,
  handleDelete,
  handleUpdate,
}) {
  return (
    <>
      <tr className="fs-4 bg-success text-light">
        {status ? (
          <td style={{ textDecoration: "line-through" }}>{title}</td>
        ) : (
          <td>{title}</td>
        )}
        <td>{`${status}`}</td>
        <td>
          <button onClick={() => handleUpdate(id)} className="btn btn-primary">
            {status ? "Done" : "MARK DONE"}
          </button>
        </td>
        <td>
          <button onClick={() => handleDelete(id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
