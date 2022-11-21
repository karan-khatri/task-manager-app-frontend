const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === 'LOADING_TRUE') {
    return { ...state, loading: true };
  }

  if (type === 'SHOW_TASKS') {
    return { ...state, tasks: payload, loading: false };
  }

  if (type === 'OPEN_MODAL') {
    return { ...state, showModal: true };
  }

  if (type === 'OPEN_MODAL_WITH_TASK_ID') {
    return { ...state, modalTaskId: payload, showModal: true };
  }

  if (type === 'CLOSE_MODAL') {
    return { ...state, showModal: false, modalTaskId: '', modalTask: {} };
  }

  if (type === 'SET_MODAL_TASK') {
    return { ...state, modalTask: payload };
  }

  if (type === 'CLEAR_MODAL_TASK_ID') {
    return { ...state, modalTaskId: '' };
  }

  if (type === 'SET_MODAL_TASK_ID') {
    return { ...state, modalTaskId: payload };
  }

  if (type === 'SET_MODAL_TASK') {
    return { ...state, modalTask: payload };
  }

  if (type === 'CLEAR_MODAL_TASK') {
    return { ...state, modalTask: {} };
  }

  throw new Error('No matching action');
};

export default reducer;
