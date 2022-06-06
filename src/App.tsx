import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar/>
      <div style={styles.container}>
        <Sidebar/>
        <Home/>
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
