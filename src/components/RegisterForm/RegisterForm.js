import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './RegisterForm.module.css';
import { connect } from 'react-redux';
import {
  userAuthOperations,
  userAuthSelectors,
  userAuthActions,
} from '../../redux/user';

class RegisterForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.props.values);
    this.props.resetValue('');
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <h1>Registr</h1>
        <form
          onSubmit={this.handleSubmit}
          className={s.register__form}
          autoComplete="off"
        >
          <div>
            <div className={s.register__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>
                perm_identity
              </Icon>
              <input
                type="text"
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <label className={s.label_name}>Name </label>
            </div>
            <div className={s.register__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>
                alternate_email
              </Icon>
              <input
                type="email"
                name="email"
                value={values.email}
                placeholder="e-mail"
                onChange={handleChange}
              />
              <label className={s.label_mail}>e-mail </label>
            </div>{' '}
            <div className={s.register__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
              <input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <label className={s.label_passw}>Password </label>
            </div>
            <button className={s.register__btn} type="submit">
              <Icon style={{ color: grey[50], fontSize: 30 }}>how_to_reg</Icon>
            </button>
          </div>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  values: {
    name: userAuthSelectors.getName(state),
    email: userAuthSelectors.getEmail(state),
    password: userAuthSelectors.getPassword(state),
  },
});
const mapDispatchToProps = dispatch => ({
  onRegister: val => dispatch(userAuthOperations.register(val)),
  handleChange: e =>
    dispatch(userAuthActions.addValue(e.target.name, e.target.value)),
  resetValue: value => dispatch(userAuthActions.resetValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
