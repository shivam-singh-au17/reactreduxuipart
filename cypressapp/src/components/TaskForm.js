import React from 'react'

const TaskForm = ({value,onChange,onSubmit}) =>
  <form>
    <input
      type='text'
      autoFocus
      className="p-2 rounded border task-input"
      placeholder="Add something?"/>
  </form>

  export default TaskForm