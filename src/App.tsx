import React from 'react';
import SignIn from './pages/Signin/index';
// import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/glabal';

import AuthContex from './contex/AuthContex';
const App: React.FC = () => (
  <>
    <AuthContex.Provider value={{ name: 'thayron' }}>
      <SignIn />
    </AuthContex.Provider>

    <GlobalStyle />
  </>
);

export default App;
