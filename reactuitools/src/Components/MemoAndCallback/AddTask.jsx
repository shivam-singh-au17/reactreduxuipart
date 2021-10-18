import React, { useCallback, useState } from "react";
import { MemoisedTodoItem } from "./OneItem";
import { v4 as uuid } from "uuid";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  const handelChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  
  const handelClick = () => {
    const payLoad = {
      title: task,
      status: false,
      id: uuid(),
    };
    const newTask = [...addTask, payLoad];
    setAddTask(newTask);
    setTask("");
  };

  const handleToggle = useCallback((id) => {
    console.log("count", id);
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        <u>Add Task Here</u>
      </h1>
      <input
        className="form-control"
        value={task}
        onChange={handelChange}
        type="text"
        placeholder="Enter Item Here"
      />
      <button onClick={handelClick} className="btn btn-warning my-2">
        Add Item
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Mark Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addTask.map((item, i) => {
            return (
              <MemoisedTodoItem
                key={item.id}
                {...item}
                color={i % 2 === 0 ? "green" : "blue"}
                handleToggle={handleToggle}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
