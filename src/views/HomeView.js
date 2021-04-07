import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import { connect } from 'react-redux';
import { userAuthSelectors } from '../redux/user';
import HomePage from '../components/HomePage';

class HomeViews extends Component {
  render() {
    return <HomePage />;
  }
}

export default HomeViews;
