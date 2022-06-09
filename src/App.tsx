import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Routers from './routes';

function App() {
  return (
    <>
      <Navbar/>
      <div style={styles.container}>
        <Sidebar/>
        <BrowserRouter>
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
