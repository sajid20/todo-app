import React from 'react';

function Task({ task, toggleComplete, deleteTask }) {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <div>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
}

export default Task;

