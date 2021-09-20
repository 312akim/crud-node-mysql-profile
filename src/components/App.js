import React, { useState } from 'react';
import LoginModal from './LoginModal';
import UserHome from './UserHome';
import '../css/App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  
  const clickLoginHandler = () => {
    setLoginModal(!loginModal);
  }

  return (
    <div className="App" style={styles.wrapper}>
      <h1>CRUD APPLICATION</h1>
      <button onClick={clickLoginHandler}>Go to Login</button>
      
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
    backgroundColor: 'lightgray',
    minHeight: '100vh',
    textAlign: 'center',
  }
}

export default App;
