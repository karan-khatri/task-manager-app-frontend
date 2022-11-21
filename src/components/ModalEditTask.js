import React, { useEffect, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import styles from './modalEditTask.module.css';

const ModalEditTask = () => {
  const { showModal, closeModal, updateTask, modalTask } = useGlobalContext();

  const taskName = useRef(null);
  const taskCompleted = useRef(null);

  const populateForm = React.useCallback(() => {
    taskName.current.value = modalTask?.name || 'Loading...';
    taskCompleted.current.checked = modalTask ? modalTask.completed : false;
  }, [modalTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = modalTask._id;
    const name = taskName.current.value;
    const completed = taskCompleted.current.checked;

    updateTask({ id, name, completed });
  };

  useEffect(() => {
    populateForm();
  }, [modalTask, populateForm]);

  return (
    <div className={`${styles.modalOverlay} ${showModal && styles.showModal}`}>
      <div className={`${styles.modalContainer} `}>
        <div className={`${styles.modalHeader} pt-4 px-5`}>
          <h1>Edit Task</h1>
          <button className={styles.closeModalBtn} onClick={() => closeModal()}>
            <FaTimes className='align-top' />
          </button>
        </div>
        <div className={`${styles.modalBody} mt-4 pb-5 px-5`}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='container'>
              <div className='mb-4 row'>
                <label className='col-sm-4 col-form-label p-0 fs-5'>Task ID:</label>
                <div className='col-sm-8 fs-5'>{modalTask?._id || 'Loading...'}</div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='name' className='col-sm-4 col-form-label p-0 fs-5'>
                  Name:
                </label>
                <div className='col-sm-8'>
                  <input type='text' className='form-control m-0' id='name' name='name' ref={taskName} />
                </div>
              </div>
              <div className='mb-4 row'>
                <label htmlFor='' className='col-sm-4 col-form-label p-0 fs-5'>
                  Completed:
                </label>
                <div className='col-sm-8'>
                  <input type='checkbox' className='form-check-input m-0 fs-3' id='completed' name='completed' ref={taskCompleted} />
                </div>
              </div>
              <button type='submit' className='btn btn-primary btn-md w-100' onClick={(e) => handleSubmit(e)}>
                Edit Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalEditTask;
