import React from 'react';
import SignIn from './pages/Signin/index';
// import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/glabal';

import { AuthProvider } from './contex/AuthContex';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);

export default App;
