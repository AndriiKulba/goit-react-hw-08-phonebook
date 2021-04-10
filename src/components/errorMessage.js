import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import { selectors } from '../redux/contacts';
import { userAuthActions } from '../redux/user';

class ErrorMassage extends Component {
  onclic = () => {
    this.props.resetError('');
  };
  render() {
    const { error } = this.props;
    return (
      <div className="msg_error msg_error_active">
        <h3>Attention!!!</h3>
        <p>{error}</p>
        <button className="close_btn" onClick={this.onclic}>
          <Icon style={{ color: grey[500], fontSize: 20 }}>close</Icon>
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  resetError: value => dispatch(userAuthActions.resetError(value)),
});
export default connect(null, mapDispatchToProps)(ErrorMassage);
