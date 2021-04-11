import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';
import { connect } from 'react-redux';
import { userAuthSelectors } from '../../redux/user';

class HomePage extends Component {
  render() {
    return (
      <div className="phone_locked">
        {this.props.isAuthenticated ? (
          <Link exact to={routes.contacts}>
            <Icon style={{ color: grey[50], fontSize: 220 }}>phone</Icon>
          </Link>
        ) : (
          <div className="locked_link">
            <Icon style={{ color: grey[800], fontSize: 220 }}>
              phone_locked
            </Icon>
            <span className="homepage_prompt">
              This function is available by authorization
            </span>
            <div className="arrow">
              <Icon style={{ color: grey[50], fontSize: 30 }}>
                arrow_upward
              </Icon>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: userAuthSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(HomePage);
