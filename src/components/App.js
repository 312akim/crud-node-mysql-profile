import React, { useState } from 'react';
import '../css/App.css';
import LoginModal from './LoginModal';
import UserHome from './UserHome';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  
  const clickLoginHandler = () => {
    setLoginModal(!loginModal);
  }

  return (
    <div className="App" style={styles.wrapper}>
      <h1>CRUD APPLICATION</h1>
      <button onClick={clickLoginHandler}>Login</button>
      
      {loginModal && <LoginModal />}

      {loggedIn && <UserHome />}
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default App;
