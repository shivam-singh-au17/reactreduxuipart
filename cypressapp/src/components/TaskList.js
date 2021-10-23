import React from 'react'

const TaskItem = props =>
  <li>
    <div >
      <label>
        {' '}
      </label>
    </div>
  </li>

const TaskList = props =>
  <ul className="task-list">
    {props.todos.map(todo => <TaskItem />)}
  </ul>

export default TaskList