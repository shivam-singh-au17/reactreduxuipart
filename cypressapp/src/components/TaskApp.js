import React, { useEffect, useState } from 'react'
import { addTask, getTasks } from './api'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


const TaskApp = () => {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")
  const [error, setError] = useState(false)

  const onTaskChange = (e) => {
    setTask(e.target.value)
  }

  /*

  const onTaskSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      id: todos.length + 1,
      taskName: task,
      isComplite: false,
    }
    setTodos([...todos, newTask]);
    setTask("")
  }

  */

  const onTaskSubmit = (e) => {
    e.preventDefault();
    let newTask = {
      id: todos.length + 1,
      taskName: task,
      isComplite: false,
    }
    addTask(newTask).then((res) => {
      setTodos([...todos, newTask]);
      setTask("");
    });
  };

  useEffect(() => {
    getTasks()
      .then((res) => {
        setTodos(res.data)
      })
      .catch((err) => {
        setError(true)
      })
  }, []);


  return (
    <div className="container text-center">
      <header className="p-2">
        <h1>Tasks</h1>
        {error && <h3 id="error-id">Some Error</h3>}
        <TaskForm
          value={task}
          onChangeTodo={onTaskChange}
          onSubmitTodo={onTaskSubmit} />
      </header>
      <section className="mt-2">
        <TaskList allTodo={todos} />
      </section>
    </div>
  )
}

export default TaskApp

