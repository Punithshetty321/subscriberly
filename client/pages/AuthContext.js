import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create a new context
const AuthContext = createContext();

// Create a custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  const navigateToRegister = () =>{
    router.push('/auth/register');
};
const navigateToLogin = () =>{
  router.push('/auth/login');
};
const navigateToAddProduct = () =>{
  router.push('/product/addproduct');
};

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, navigateToAddProduct, navigateToLogin, navigateToRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
