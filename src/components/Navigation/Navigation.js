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
      </NavLink>{' '}
      <NavLink
        exact
        to={routes.contacts}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        <Icon style={{ color: grey[50], fontSize: 25 }}>contacts</Icon>
        <span className={styles.prompt}>Contacts</span>
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
