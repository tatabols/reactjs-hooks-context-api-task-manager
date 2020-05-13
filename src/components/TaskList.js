import React, { useContext } from 'react';

import Task from './Task';
import { TaskListContext } from '../context/TaskListContext';

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul className='list'>
          {tasks.map(task => (
            <Task {...task} key={task.id} />
          ))}
        </ul>
      ) : (
        <div className='no-tasks'>No task create yet. Create one?</div>
      )}
    </div>
  );
};

export default TaskList;
