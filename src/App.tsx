import React from 'react';

import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/glabal';

import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
