import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'


const TaskApp = () => {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")

  const onTaskChange = (e) => {
    setTask(e.target.value)
  }

  const onTaskSubmit = (e) => {
    let newTask = {
      id: todos.length + 1,
      name: task,
      isComplite: false
    }
  }

  return (
    <div className="container-fluid text-center">
      <header className="p-2">
        <h1>Tasks</h1>
        <TaskForm value={task} />
      </header>
      <section className="mt-2">
        <TaskList todos={todos} onChange={onTaskChange} />
      </section>
    </div>
  )
}

export default TaskApp

