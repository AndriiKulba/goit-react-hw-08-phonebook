import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactItem.module.css';
import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Avatar from '@material-ui/core/Avatar';

class ContactItem extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <Accordion defaultActiveKey="0">
        {contacts.map(({ id, name, number }) => {
          return (
            <Card
              key={id}
              style={{
                backgroundColor: 'rgb(39, 36, 36)',
                borderRadius: '10px',
              }}
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey={id}
                style={{
                  borderBottom: '1px solid grey',
                }}
              >
                <Avatar
                  style={{
                    width: '22px',
                    height: '22px',
                    fontSize: '12px',
                    color: 'black',
                  }}
                >
                  {name.substr(0, 2)}
                </Avatar>
                <p>{name}</p>
              </Accordion.Toggle>
              <button
                type="button"
                className={s.deleteBtn}
                onClick={() => deleteContact(id)}
              >
                <Icon style={{ color: grey[50], fontSize: 26 }}>
                  delete_forever
                </Icon>
              </button>
              <Accordion.Collapse eventKey={id}>
                <Card.Body style={{ padding: '3px', marginLeft: '60px' }}>
                  {number}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    );
  }
}
ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getvisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

// import Accordion from 'react-bootstrap/Accordion';
// import Card from 'react-bootstrap/Card';
// const ContactItem = ({ visibleContacts, deleteContact }) => {
//   return (
//     <Accordion defaultActiveKey="0">
//       {visibleContacts.map(({ id, name, number }) => {
//         return (
//           <Card>
//             <Accordion.Toggle as={Card.Header} eventKey={id}>
//               <p>{name}</p>
//               <button type="button" onClick={() => deleteContact(id)}>
//                 <Icon style={{ color: grey[50], fontSize: 26 }}>
//                   delete_forever
//                 </Icon>
//               </button>
//             </Accordion.Toggle>
//             <Accordion.Collapse eventKey={id}>
//               <Card.Body>{number}</Card.Body>
//             </Accordion.Collapse>
//           </Card>
//         );
//       })}
//     </Accordion>
//   );
// };
// ContactItem.propTypes = {
//   visibleContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
// export default ContactItem;

//  <ul className={s.contacts__list}>
//         {contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id} className={s.contacts__item}>
//               <p>
//                 {name}: {number}
//               </p>
//               <button type="button" onClick={() => deleteContact(id)}>
//                 <Icon style={{ color: grey[50], fontSize: 26 }}>
//                   delete_forever
//                 </Icon>
//               </button>
//             </li>
//           );
//         })}
//       </ul>
