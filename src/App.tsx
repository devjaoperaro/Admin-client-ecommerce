import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Routers from './routes';

function App() {

  // const user = useSelector((state: any) => state.user);
  const user = false;

  return (
    <>
      {user && <Navbar/>}
      <div style={styles.container}>
        <BrowserRouter>
          {user && <Sidebar/>}
          <Routers/>
        </BrowserRouter>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
  },
};

export default App;
