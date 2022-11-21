import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const AddTaskForm = () => {
  const { addTask } = useGlobalContext();
  const taskName = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName.current.value);
  };

  return (
    <div className='addTaskForm d-flex justify-content-center flex-column col-12 col-md-6 mx-auto px-4 py-5 bg-white rounded shadow'>
      <h2 className='title mb-4'>Add Task</h2>
      <form className='d-block' onSubmit={(e) => handleSubmit(e)}>
        <div className='input-group mb-3'>
          <input type='text' id='name' name='name' ref={taskName} className='form-control form-control-md shadow-none bg-light' placeholder='Feed the cat!' />
          <button className='btn btn-primary btn-md shadow-none fw-bold' type='submit' onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskForm;
