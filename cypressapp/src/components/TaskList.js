import React from 'react'

const TaskItem = (props) => {
  return (
    <li id={`task-${props.todos.id}`}>
        <label>
          {props.todos.taskName}
          <span>{props.todos.isComplite}</span>
        </label>
    </li>
  )
}


const TaskList = (props) => {
  return (
    <ol className="task-list table">
      {props.allTodo.map((todos) => {
        return (
          <TaskItem todos={todos} key={todos.id} />
        )
      })}
    </ol>
  )
}

export default TaskList

