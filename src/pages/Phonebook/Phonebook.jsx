import { Box } from 'components/Box';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selector';
import { selectLoading } from 'redux/auth/auth-selector';

const Phonebook = () => {
  const isContactsLoading = useSelector(selectIsLoading);
  const isAuthLoading = useSelector(selectLoading);
  return (
    <>
      <Box
        p={4}
        mb={4}
        border="1px solid #087582"
        borderRadius={4}
        display="flex"
        flexDirection="column"
        position="relative"
      >
        {isAuthLoading && <Loader />}
        <h1 className="fs-2">Phonebook</h1>
        <ContactForm />
      </Box>
      <Box
        p={4}
        border="1px solid #087582"
        borderRadius={4}
        display="flex"
        flexDirection="column"
        position="relative"
      >
        {isContactsLoading && <Loader />}
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </>
  );
};
export default Phonebook;
