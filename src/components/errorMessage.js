import React from 'react';

import { connect } from 'react-redux';
import { selectors } from '../redux/contacts';
import { userAuthSelectors } from '../redux/user';

const ErrorMassage = error => {
  return (
    <div
      className={!Boolean(error) ? 'msg_error ' : 'msg_error msg_error__active'}
    >
      <h3>Attention!!!</h3>
      <p>{error}</p>
      <button className="close_btn">
        <Icon style={{ color: grey[500], fontSize: 20 }}>close</Icon>
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  error: selectors.getError(state),
});
const mapStateToProps = state => ({
  isAuthenticated: userAuthSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(ErrorMassage);
