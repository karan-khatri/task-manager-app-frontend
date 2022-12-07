import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from './utils/reducer';

const AppContext = React.createContext();

const initialState = {
  tasks: [],
  loading: true,
  showModal: false,
  modalTaskId: '',
  modalTask: {},
};

const baseURL = 'https://task-manager-b1za.onrender.com/v1/tasks/';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = (id) => {
    dispatch({ type: 'OPEN_MODAL_WITH_TASK_ID', payload: id });
  };

  const getSingleTask = React.useCallback(async () => {
    try {
      const response = await axios.get(`${baseURL}${state.modalTaskId}`);
      const singleTask = response.data.task;
      dispatch({ type: 'SET_MODAL_TASK', payload: singleTask });
    } catch (error) {
      console.log(error);
    }
  }, [state.modalTaskId]);

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
    getTasks();
  };

  const addTask = async (name) => {
    try {
      await axios.post(baseURL, { name });
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${baseURL}${id}`);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async ({ id, name, completed }) => {
    await axios.patch(`${baseURL}${id}`, { name: name, completed: completed });
  };

  const getTasks = async () => {
    dispatch({ type: 'LOADING_TRUE' });
    const response = await fetch(baseURL);
    const tempData = await response.json();
    dispatch({ type: 'SHOW_TASKS', payload: tempData });
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    if (state.modalTaskId) {
      getSingleTask();
    }
  }, [state.modalTaskId, getSingleTask]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
        getSingleTask,
        addTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
