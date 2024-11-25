import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AuthContext, useAuth, ProtectedRoute } from './ProtectedRoute';

import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import NavBar from "./components/NavBar";

import { useThemeStore } from "./store/useThemeStore";

const Router = () => {
  const auth = useAuth();
  const location = useLocation();
  const {theme} = useThemeStore();

  const showNavBar = auth.isAuthenticated && !['/login', '/signup'].includes(location.pathname);
  
  return (
    <AuthContext.Provider value={auth}>
      {showNavBar && <NavBar />}
      <div data-theme={theme}>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={auth.isAuthenticated ? <Navigate to='/home' replace /> : <LoginPage />} />
          <Route path='/signup' element={auth.isAuthenticated ? <Navigate to='/home' replace /> : <SignupPage /> } />
          <Route path='/home' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path='/settings' element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default Router;