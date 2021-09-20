import React, { useState } from 'react';
import LoginModal from './LoginModal';
import UserHome from './UserHome';
import '../css/App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  
  const clickLoginHandler = () => {
    setLoginModal(!loginModal);
  }

  const loginHandler = (e) => {
    e.preventDefault();
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="App" style={styles.wrapper}>
      <h1>CRUD APPLICATION</h1>
      {!loginModal && !loggedIn && <button onClick={clickLoginHandler}>Click to Login</button>}
      
      {!loggedIn && loginModal && <LoginModal loginHandler={loginHandler}/>}

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
