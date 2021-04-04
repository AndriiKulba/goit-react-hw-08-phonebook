import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import styles from './Navigation.module.css';
import routes from '../../routes';

const Navigation = () => (
  <nav>
    <div className={styles.home_link}>
      <NavLink
        exact
        to={routes.home}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Icon style={{ color: grey[50], fontSize: 25 }}>home</Icon>
        <span className={styles.prompt}>Home</span>
      </NavLink>
    </div>
    <div className={styles.user_menu}>
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
  </nav>
);

export default Navigation;
