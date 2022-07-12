import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Routers from './routes';

function App() {

  const [adminToken, setAdminToken] = React.useState('');
  
  const user = useSelector((state: any) => state.user.currentUser);

  // if(user == null) {
  //   setAdminToken(JSON.parse(JSON.parse(localStorage.getItem("persist:root") as any).user).currentUser.accessToken);
  // }else{
  //   console.log('fazio')
  // }

  // ambos a mesma coisa
  // const user = useSelector((state: any) => state.user.currentUser.accessToken);

  console.log(user)
  
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
