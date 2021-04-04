import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.state.contacts;
const getName = state => state.state.name;
const getNumber = state => state.state.number;
const getFilter = state => state.state.filter;
const getLoading = state => state.state.loading;

const getvisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      )
      .sort((a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0));
  },
);

export default {
  getContacts,
  getName,
  getNumber,
  getFilter,
  getLoading,
  getvisibleContacts,
};
