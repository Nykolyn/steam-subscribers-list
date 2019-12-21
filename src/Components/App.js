import React, { useState } from 'react';
import MouseTrail from './MouseTrail';

import FormDialog from './FormDialog/FormDialog';
import Subscribers from '../Pages/Subscribers';

const App = () => {
  const [isAuth, setIsAuth] = useState(true);

  const handleAuth = password => {
    return password === process.env.REACT_APP_PASSWORD ? setIsAuth(true) : null;
  };

  return (
    <>
      <MouseTrail />
      <Subscribers isAuth={isAuth} />
      {!isAuth && <FormDialog submitPassword={handleAuth} />}
    </>
  );
};

export default App;
