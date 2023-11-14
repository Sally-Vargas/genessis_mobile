import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();


function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [mode,setMode] = useState('dark')

  const login = (userData) => {
    // Lógica para iniciar sesión y establecer el usuario en el estado
    setUser(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión y establecer el usuario en null
    setUser(null);
  };

  const changeMode = (modeData) => {
    setMode(modeData)
  }

  return (
    <AuthContext.Provider value={{ user, mode, login, logout, changeMode }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export {
  useAuth,
  AuthProvider
}