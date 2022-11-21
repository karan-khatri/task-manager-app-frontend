import { useGlobalContext } from '../context';
import ModalEditTask from './ModalEditTask';
import SingleTask from './SingleTask';

const Tasks = () => {
  const { tasks, loading, showModal } = useGlobalContext();

  if (loading) {
    return <h1 className='text-center'>Loading....</h1>;
  }
  if (tasks.length < 1) {
    return <h2 className='text-center'>No Task Found</h2>;
  }
  return (
    <div className='tasks'>
      <h2 className='mb-4 mx-auto text-center'>Tasks</h2>
      {tasks.map((task) => {
        return <SingleTask key={task._id} {...task} />;
      })}
      {showModal && <ModalEditTask />}
    </div>
  );
};

export default Tasks;
