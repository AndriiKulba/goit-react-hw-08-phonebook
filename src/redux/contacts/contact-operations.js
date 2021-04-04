import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(addContactsRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error)));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactsRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => dispatch(deleteContactsSuccess(contactId)))
    .catch(error => dispatch(deleteContactsError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};
