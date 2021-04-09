import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './LoginForm.module.css';
import { connect } from 'react-redux';
import {
  userAuthOperations,
  userAuthSelectors,
  userAuthActions,
} from '../../redux/user';
import Fab from '@material-ui/core/Fab';

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.props.values);
    this.props.resetValue('');
  };

  render() {
    const { values, handleChange } = this.props;
    const { email, password } = values;

    return (
      <>
        <h1>Login</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.login__form}
          autoComplete="off"
        >
          <div>
            <div className={s.login__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>
                alternate_email
              </Icon>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="e-mail"
                onChange={handleChange}
              />
              <label className={s.label_mail}>e-mail</label>
            </div>
            <div className={s.login__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
              <label className={s.label_passw}>Password</label>
            </div>

            <button className={s.login__btn} type="submit">
              <Icon style={{ color: grey[50], fontSize: 30 }}>exit_to_app</Icon>
            </button>
          </div>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => ({
  values: {
    email: userAuthSelectors.getEmail(state),
    password: userAuthSelectors.getPassword(state),
  },
});
const mapDispatchToProps = dispatch => ({
  onLogin: val => dispatch(userAuthOperations.logIn(val)),
  handleChange: e =>
    dispatch(userAuthActions.addValue(e.target.name, e.target.value)),
  resetValue: value => dispatch(userAuthActions.resetValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
