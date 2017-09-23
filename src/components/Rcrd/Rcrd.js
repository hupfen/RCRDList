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
import s from './Rcrd.css';

class Rcrd extends React.Component {
  static propTypes = {
    record: PropTypes.shape.isRequired,
  };

  render() {
    const { record } = this.props;
    return (
      <div className={s.artwork}>
        {record}
      </div>
    );
  }
}

export default withStyles(s)(Rcrd);
