import React, { useState } from 'react';
import '../css/App.css';
import LoginModal from './LoginModal';

function App() {
  const [loginModal, setLoginModal] = useState(false);
  
  const clickLoginHandler = () => {
    setLoginModal(!loginModal);
  }

  return (
    <div className="App" style={styles.wrapper}>
      <h1>CRUD APPLICATION</h1>
      <button onClick={clickLoginHandler}>Login</button>
    
      {loginModal && <LoginModal />}
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
