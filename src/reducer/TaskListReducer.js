import { v4 as uuidv4 } from 'uuid';

import actionTypes from '../actions/actionsTypes';

const TaskListReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.ADD_TASK:
      return [...state, { id: uuidv4(), title: payload.title }];

    case actionTypes.REMOVE_TASK:
      return state.filter(task => task.id !== payload.id);

    case actionTypes.CLEAR_TASK:
      return [];

    case actionTypes.EDIT_TASK:
      return state.map(task =>
        task.id === payload.id ? { id: payload.id, title: payload.title } : task
      );

    default:
      return state;
  }
};

export default TaskListReducer;
