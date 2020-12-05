import React, {
  createContext, useCallback, useState, useContext,
} from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: Object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContexData {
  user: Object;
  sigin(credentials: SignInCredentials): Promise<void>;
  signOuth(): void;
}

const AuthContex = createContext<AuthContexData>({} as AuthContexData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });
  const sigin = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { user, token } = response.data;
    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    setData({ token, user });
  }, []);

  const signOuth = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');
    setData({} as AuthState);
  }, []);

  return (
    <AuthContex.Provider value={{ user: data.user, sigin, signOuth }}>
      {children}
    </AuthContex.Provider>
  );
};

export function useAuth(): AuthContexData {
  const content = useContext(AuthContex);
  if (!content) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return content;
}
