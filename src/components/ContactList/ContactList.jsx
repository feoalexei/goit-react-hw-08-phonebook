import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { NoContacts, StyledList } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/filter/filter-selector';
import { getContactsThunk } from 'redux/contacts/contacts-thunk';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return contacts.length > 0 ? (
    <StyledList>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </StyledList>
  ) : (
    <NoContacts>There are no contacts yet</NoContacts>
  );
};

export default ContactList;
