import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUserThunk } from 'redux/auth/auth-thunk';

import { AppContainer } from './App.styled';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const SignUpPage = lazy(() => import('../pages/Register/Register'));
const SignInPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
          </Route>
        </Route>
      </Routes>
    </AppContainer>
  );
};
