import React, { useState, createContext, useEffect, useReducer } from 'react';

import TaskListReducer from '../reducer/TaskListReducer';
import {
  addTaskAction,
  removeTaskAction,
  clearTaskAction,
  editTaskAction,
} from '../actions/taskActions';

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [state, dispatch] = useReducer(TaskListReducer, initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state));
  }, [state]);

  const addTask = title => {
    dispatch(addTaskAction(title));
  };

  const removeTask = id => {
    dispatch(removeTaskAction(id));
  };

  const clearTask = () => {
    dispatch(clearTaskAction());
  };

  const editTask = (id, title) => {
    dispatch(editTaskAction(id, title));
    setEditItem(null);
  };

  const findItem = id => {
    const item = state.find(task => task.id === id);
    setEditItem(item);
  };

  const cancelEditItem = id => {
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks: state,
        editItem,
        addTask,
        removeTask,
        clearTask,
        findItem,
        editTask,
        cancelEditItem,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
