import React from 'react'

const TaskForm = ({ value, onChangeTodo, onSubmitTodo }) =>
  <form onSubmit={onSubmitTodo}>
    <input
      type='text'
      value={value}
      onChange={onChangeTodo}
      autoFocus
      className="p-2 rounded form-control border task-input"
      placeholder="Add something?"
    />
  </form>


export default TaskForm

