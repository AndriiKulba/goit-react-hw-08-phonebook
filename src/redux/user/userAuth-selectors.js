const getIsAuthenticated = state => state.userAuth.isLogin;

const getUsername = state => state.userAuth.user.name;
const getName = state => state.userAuth.name;
const getEmail = state => state.userAuth.email;
const getPassword = state => state.userAuth.password;
const getError = state => state.userAuth.error;
export default {
  getIsAuthenticated,
  getUsername,
  getName,
  getEmail,
  getPassword,
  getError,
};
