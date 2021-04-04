import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default class Load extends Component {
  render() {
    return (
      <Loader
        type="BallTriangle"
        color="white"
        secondaryColor="grey"
        height={20}
        width={20}
        className={s.loader}
      />
    );
  }
}
