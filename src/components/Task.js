import React, { useContext } from 'react';

import { TaskListContext } from '../context/TaskListContext';

const Task = ({ id, title }) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className='list-item'>
      <span>{title}</span>
      <div>
        <button className='btn-delete task-btn' onClick={() => removeTask(id)}>
          <i className='fas fa-trash-alt' />
        </button>
        <button className='btn-edit task-btn' onClick={() => findItem(id)}>
          <i className='fas fa-pen' />
        </button>
      </div>
    </li>
  );
};

export default Task;
