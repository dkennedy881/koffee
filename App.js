import React, {useState, useEffect} from 'react';
import {Home, ToggleSignIn} from './components/';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('logged in');
      console.log(userData);
    } else {
      setUserData(null);
    }
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <Home userData={userData} setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <ToggleSignIn
      setUserData={setUserData}
      setIsLoggedIn={setIsLoggedIn}></ToggleSignIn>
  );
};

export default App;
