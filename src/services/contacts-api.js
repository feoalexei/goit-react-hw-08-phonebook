import axios from 'axios';

export const contactsService = axios.create({
  baseURL: 'https://63f3b858864fb1d6001cdcc9.mockapi.io/contacts',
});

export const fetchContacts = async () => {
  const { data } = await contactsService.get('');
  return data;
};

export const addContact = async contactData => {
  const { data } = await contactsService.post('', contactData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await contactsService.delete(id);
  return data;
};
