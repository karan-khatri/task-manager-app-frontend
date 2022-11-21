import Home from './screens/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <main
      className='bg-light min-vh-100 py-5'
      style={{
        fontFamily: 'Inconsolata, sans-serif',
      }}
    >
      <Home />
    </main>
  );
};

export default App;
