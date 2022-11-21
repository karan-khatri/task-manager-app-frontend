import React from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import { useGlobalContext } from '../context';
import stylesSheet from './singleTask.module.css';

const SingleTask = ({ _id, name, completed }) => {
  const { deleteTask, openModal } = useGlobalContext();

  const handleDelete = async () => {
    deleteTask(_id);
  };

  const handleEdit = () => {
    openModal(_id);
  };

  return (
    <article className='single-task bg-white'>
      <div className='d-flex justify-content-between px-4 py-3 border rounded shadow-sm mb-4'>
        <h4 className={`task-name ${completed} d-inline-flex mb-0 fw-normal text-capitalize`}>
          {completed && <FaCheck className='text-success border border-2 border-success rounded-circle p-1 my-auto me-3 ' />}
          <span className={completed ? stylesSheet.completedTask : ''}>{name}</span>
        </h4>
        <div className='icons px-2 d-inline-flex'>
          <button className='btn p-0 me-3 border-0' onClick={handleEdit}>
            <BsPencilSquare className=' text-primary fs-5' />
          </button>
          <button className='btn p-0 border-0' onClick={handleDelete}>
            <FaTrashAlt className='text-danger fs-5' />
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleTask;
