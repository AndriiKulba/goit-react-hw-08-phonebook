const getIsAuthenticated = state => Boolean(state.userAuth.token);

const getUsername = state => state.userAuth.user.name;
const getName = state => state.userAuth.name;
const getEmail = state => state.userAuth.email;
const getPassword = state => state.userAuth.password;
export default {
  getIsAuthenticated,
  getUsername,
  getName,
  getEmail,
  getPassword,
};