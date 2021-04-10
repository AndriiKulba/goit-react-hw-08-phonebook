import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { selectors, operations, addValue } from '../../redux/contacts';
import { userAuthSelectors, userAuthActions } from '../../redux/user';

const nameInputID = uuidv4();
const numberInputID = uuidv4();
class ContactForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.props;

    const auditContact = contacts.filter(contact => contact.name === name);

    auditContact.length === 0
      ? this.props.addContact(name, number)
      : alert('This contact already exist');

    this.props.resetValue('');
  };
  clic = () => {
    this.props.resetValue(null);
  };
  render() {
    const { name, number, handleChange, error, resetValue } = this.props;

    return (
      <div className={s.phonebook}>
        <h1>{this.props.title}</h1>

        <form onSubmit={this.handleSubmit} className={s.phonebook__form}>
          <div>
            <div className={s.phonebook__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>
                perm_identity
              </Icon>

              <input
                type="text"
                name="name"
                value={name}
                id={nameInputID}
                onChange={handleChange}
              />
              <label className={s.phonebook__name}>Name</label>
            </div>
            <div className={s.phonebook__field}>
              <Icon style={{ color: grey[500], fontSize: 20 }}>phone</Icon>
              <input
                type="tel"
                name="number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                placeholder={'111-22-33'}
                value={number}
                id={numberInputID}
                onChange={handleChange}
              />
              <label htmlFor={numberInputID} className={s.phonebook__tel}>
                Phone
              </label>
            </div>
          </div>
          <button type="submit" className={s.phonebook__btn}>
            <Icon style={{ color: grey[50], fontSize: 40 }}>add_circle</Icon>
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.defaultProps = { title: 'Phonebook' };
ContactForm.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  name: selectors.getName(state),
  number: selectors.getNumber(state),
  error: userAuthSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: (name, number) => dispatch(operations.addContact(name, number)),
  handleChange: e => dispatch(addValue(e.target.name, e.target.value)),
  resetValue: value => dispatch(userAuthActions.resetValue(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
