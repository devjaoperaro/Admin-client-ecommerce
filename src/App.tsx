import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Routes from './routes';

function App() {
  return (
    <>
      <Navbar/>
      <div style={styles.container}>
        <Sidebar/>
        <BrowserRouter>
          <Routes/>
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
