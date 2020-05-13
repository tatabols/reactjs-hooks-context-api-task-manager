import React, { useContext, useState } from 'react';

import { TaskListContext } from '../context/TaskListContext';

const Task = ({ id, title }) => {
  const { removeTask, findItem, editItem, cancelEditItem } = useContext(
    TaskListContext
  );
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditTask = id => {
    if (!isEditMode) {
      findItem(id);
    } else {
      cancelEditItem();
    }
    setIsEditMode(prevMode => !prevMode);
  };

  return (
    <li className='list-item'>
      <span>{title}</span>
      <div>
        {editItem && editItem.id === id ? null : (
          <button
            className='btn-delete task-btn'
            onClick={() => removeTask(id)}
          >
            <i className='fas fa-trash-alt' />
          </button>
        )}
        <button
          className='btn-edit task-btn'
          onClick={() => handleEditTask(id)}
        >
          {editItem && editItem.id === id ? (
            <i className='fas fa-undo' />
          ) : (
            <i className='fas fa-pen' />
          )}
        </button>
      </div>
    </li>
  );
};

export default Task;
