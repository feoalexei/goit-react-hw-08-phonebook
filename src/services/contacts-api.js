import axios from 'axios';

import { privateApi } from 'http/http';

export const contactsService = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const fetchContacts = async () => {
  const { data } = await privateApi.get('/contacts');
  return data;
};

export const addContact = async contactData => {
  const { data } = await privateApi.post('/contacts', contactData);
  return data;
};

export const deleteContact = async id => {
  const { data } = await privateApi.delete(`/contacts/${id}`);
  return data;
};
