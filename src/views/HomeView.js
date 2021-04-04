import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import routes from '../routes';
import Icon from '@material-ui/core/Icon';
import grey from '@material-ui/core/colors/grey';

class HomeViews extends Component {
  render() {
    return (
      <div className="phone_locked">
        <Link exact to={routes.contacts}>
          <Icon style={{ color: grey[50], fontSize: 220 }}>phone</Icon>
        </Link>

        <Icon style={{ color: grey[600], fontSize: 220 }}>phone_locked</Icon>
      </div>
    );
  }
}

export default HomeViews;
