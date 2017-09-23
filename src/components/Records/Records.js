/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Rcrd from '../Rcrd';
import s from './Records.css';

class Records extends React.Component {
  static propTypes = {
    record: PropTypes.shape.isRequired,
  };

  render() {
    const { record } = this.props;
    return (
      <div className={s.root}>
        <Rcrd className={s.container} record={record} />
      </div>
    );
  }
}

export default withStyles(s)(Records);
