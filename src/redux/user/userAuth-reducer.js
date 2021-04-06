import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import userAuthActions from './userAuth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [userAuthActions.registerSuccess]: (_, { payload }) => payload.user,
  [userAuthActions.loginSuccess]: (_, { payload }) => payload.user,
  [userAuthActions.logoutSuccess]: () => initialUserState,
  [userAuthActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [userAuthActions.registerSuccess]: (_, { payload }) => payload.token,
  [userAuthActions.loginSuccess]: (_, { payload }) => payload.token,
  [userAuthActions.logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [userAuthActions.registerError]: setError,
  [userAuthActions.loginError]: setError,
  [userAuthActions.logoutError]: setError,
  [userAuthActions.getCurrentUserError]: setError,
});

const name = createReducer('', {
  'auth/addname': (_, { payload }) => payload,
  [userAuthActions.resetValue]: (_, { payload }) => payload,
});

const email = createReducer('', {
  'auth/addemail': (_, { payload }) => payload,
  [userAuthActions.resetValue]: (_, { payload }) => payload,
});

const password = createReducer('', {
  'auth/addpassword': (_, { payload }) => payload,
  [userAuthActions.resetValue]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  error,
  name,
  email,
  password,
});
