import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
  addValue,
  resetValue,
} from './contact-actions';

const initialState = [];
const contacts = createReducer(initialState, {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});
// const setError = (_, { payload }) => payload.message;
// const error = createReducer(null, {
//   [fetchContactsError]: setError,
//   [addContactsError]: setError,
//   [deleteContactsError]: setError,
// });
const name = createReducer('', {
  'values/addname': (_, { payload }) => payload,
  [resetValue]: (_, { payload }) => payload,
});

const number = createReducer('', {
  'values/addnumber': (_, { payload }) => payload,
  [resetValue]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  'values/addfilter': (_, { payload }) => payload,
  [resetValue]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  loading,

  name,
  number,
  filter,
});
