import React, { useState, useContext, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, editTask, editItem, clearTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
    } else {
      editTask(editItem.id, title);
    }

    setTitle('');
  };

  const handleClear = e => {
    e.preventDefault();
    clearTask();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='task-input'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Update Task' : 'Add Task'}
        </button>
        <button className='btn clear-btn' onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
