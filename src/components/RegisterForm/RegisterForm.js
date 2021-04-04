import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './RegisterForm.module.css';

class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <>
        <h1>Registaration</h1>

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
                value={name}
                placeholder="Name"
                onChange={this.handleChange}
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
                value={email}
                placeholder="e-mail"
                onChange={this.handleChange}
              />
              <label className={s.label_mail}>e-mail </label>
            </div>{' '}
            <div className={s.register__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>pan_tool</Icon>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
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

export default RegisterForm;
