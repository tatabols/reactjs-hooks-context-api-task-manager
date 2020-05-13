import actionTypes from './actionsTypes';

const addTaskAction = title => {
  return { type: actionTypes.ADD_TASK, payload: { title } };
};

const removeTaskAction = id => {
  return { type: actionTypes.REMOVE_TASK, payload: { id } };
};

const clearTaskAction = () => {
  return { type: actionTypes.CLEAR_TASK };
};

const editTaskAction = (id, title) => {
  return { type: actionTypes.EDIT_TASK, payload: { id, title } };
};

export { addTaskAction, removeTaskAction, clearTaskAction, editTaskAction };
