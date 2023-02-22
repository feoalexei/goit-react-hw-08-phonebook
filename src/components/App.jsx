import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Box } from './Box';
// import { AppContainer } from './App.styled';
// import { useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/contacts/contacts-selector';
// import Loader from './Loader';

import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const SignUpPage = lazy(() => import('../pages/Register/Register'));
const SignInPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Phonebook/Phonebook'));

export const App = () => {
  // const isLoading = useSelector(selectIsLoading);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>

    // <AppContainer>
    //   <Box
    //     p={4}
    //     mb={4}
    //     border="1px solid #087582"
    //     borderRadius={4}
    //     display="flex"
    //     flexDirection="column"
    //   >
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //   </Box>
    //   <Box
    //     p={4}
    //     border="1px solid #087582"
    //     borderRadius={4}
    //     display="flex"
    //     flexDirection="column"
    //     position="relative"
    //   >
    //     {isLoading && <Loader />}
    //     <h2>Contacts</h2>
    //     <Filter />
    //     <ContactList />
    //   </Box>
    // </AppContainer>
  );
};
