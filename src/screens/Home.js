import React from 'react';
import AddTaskForm from '../components/AddTaskForm';
import Tasks from '../components/Tasks';

const Home = () => {
  return (
    <>
      <h1 className='text-success text-center mb-5'>Task Manager</h1>
      <div className='container'>
        <section className='form-section mb-5 text-center mx-3'>
          <div className='row'>
            <AddTaskForm />
          </div>
        </section>
        <section className='tasks-section'>
          <div className='row'>
            <div className='col-3 d-none d-md-block'></div>
            <div className='col-12 col-md-6'>
              <Tasks />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
