import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import s from './ContactItem.module.css';
import { connect } from 'react-redux';
import { operations, selectors } from '../../redux/contacts';

const ContactItem = ({ contacts, deleteContact, isLoading }) => {
  return (
    <ul className={s.contacts__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contacts__item}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => deleteContact(id)}>
              <Icon style={{ color: grey[50], fontSize: 26 }}>
                delete_forever
              </Icon>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
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
