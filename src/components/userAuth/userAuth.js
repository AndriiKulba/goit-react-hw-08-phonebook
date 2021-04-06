import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import styles from './userAuth.module.css';
import routes from '../../routes';

const UserAuth = () => (
  <div>
    <NavLink
      to={routes.register}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Icon style={{ color: grey[50], fontSize: 25 }}>person_add</Icon>
      <span className={styles.prompt}>Register</span>
    </NavLink>
    <NavLink
      to={routes.login}
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      <Icon style={{ color: grey[50], fontSize: 25 }}>exit_to_app</Icon>
      <span className={styles.prompt}>Login</span>
    </NavLink>
  </div>
);

export default UserAuth;
