import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import styles from './userMenu.module.css';
import { connect } from 'react-redux';
import { userAuthOperations, userAuthSelectors } from '../../redux/user';

class UserMenu extends Component {
  render() {
    return (
      <div className={styles.user_menu}>
        <span className={styles.username}>Welcome, {this.props.name}</span>
        <button
          type="button"
          className={styles.btn_logout}
          onClick={this.props.onLogout}
        >
          <Icon style={{ color: grey[50], fontSize: 25 }}>logout</Icon>
          <span className={styles.prompt}>Logout</span>
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  name: userAuthSelectors.getUsername(state),
});
const mapDispatchToProps = {
  onLogout: userAuthOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
