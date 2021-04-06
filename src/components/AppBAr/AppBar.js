import Navigation from '../Navigation/Navigation';
import UserAuth from '../userAuth/userAuth';
import UserMenu from '../userMenu/userMenu';
import styles from './AppBar.module.css';
import { connect } from 'react-redux';
import { userAuthSelectors } from '../../redux/user';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <UserAuth />}
    </header>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: userAuthSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
