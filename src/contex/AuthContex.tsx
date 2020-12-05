import React, { createContext, useCallback, useState } from 'react';
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
}

export const AuthContex = createContext<AuthContexData>({} as AuthContexData);

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

  return (
    <AuthContex.Provider value={{ user: data.user, sigin }}>
      {children}
    </AuthContex.Provider>
  );
};
