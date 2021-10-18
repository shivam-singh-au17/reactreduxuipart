import React, { useState } from "react";
import OneItem from "./OneItem";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../../AllState/ConfiguringStore/Todo/action";



export default function AddTask() {
  const [title, setTitle] = useState("");
  const todos = useSelector(state => state.todoApp.todos)
  const dispatch = useDispatch();

  const handelChange = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handelAdd = () => {
    const payLoad = {
      title: title,
      status: false,
      id: uuid(),
    };
    const addTodoAction = addTodo(payLoad);
    dispatch(addTodoAction);
  };

  const handleDelete = (id) => {
    // fetch(`http://localhost:3001/todos/${id}`, {
    //   method: "DELETE",
    // }).then(() => {
    //   getMyTodos();
    // });
  };

  const handleUpdate = (id) => {
    todos.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
  };


  return (
    <div className="container bg-success p-2 mt-5">
      <h1 className="text-center mb-3 text-light">
        <u>Add Task Here</u>
      </h1>
      <input
        value={title}
        onChange={handelChange}
        type="text"
        className="form-control"
        placeholder="Enter Your Data Here"
      />
      <button onClick={handelAdd} className="btn btn-warning my-3">
        Add
      </button>
      <table className="table">
        <thead className="bg-info">
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Mark Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="bg-warning">
          {todos.map((item, i) => {
            return (
              <OneItem
                key={i}
                {...item}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
