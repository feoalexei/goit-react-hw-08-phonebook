import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selector';
import { deleteContactThunk } from 'redux/contacts/contacts-thunk';
import {
  StyledContact,
  ContactIcon,
  Name,
  Dots,
  Number,
  DeleteBtn,
} from './Contact.styled';

const Contact = ({ contact }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const deleteContact = () => dispatch(deleteContactThunk(contact.id));

  return (
    <StyledContact>
      <Name>
        <ContactIcon />
        {contact.name}
      </Name>
      <Dots></Dots>
      <Number>{contact.number}</Number>
      <DeleteBtn onClick={deleteContact} disabled={isLoading}>
        Delete
      </DeleteBtn>
    </StyledContact>
  );
};

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
