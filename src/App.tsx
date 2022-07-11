import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Routers from './routes';

function App() {

  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root") as any).user).currentUser;

  // const admin = false;
  return (
    <>
      {admin && <Navbar/>}
      <div style={styles.container}>
        <BrowserRouter>
          {admin && <Sidebar/>}
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
