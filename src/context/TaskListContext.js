import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = title => {
    setTasks([...tasks, { id: uuidv4(), title }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearTask = () => {
    setTasks([]);
  };

  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  };

  const editTask = (id, title) => {
    const newTasks = tasks.map(task => (task.id === id ? { id, title } : task));

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        editItem,
        addTask,
        removeTask,
        clearTask,
        findItem,
        editTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
