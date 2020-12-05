import React from 'react';
import SignIn from './pages/Signin/index';
// import SignUp from './pages/SignUp/index';
import GlobalStyle from './styles/glabal';

import ToastContainer from './ToastContainer/intex';
import { AuthProvider } from './hooks/AuthContex';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
