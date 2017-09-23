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
    records: PropTypes.shape.isRequired,
  };

  render() {
    const { records } = this.props;
    if (records === null || records === undefined) {
      return <div />;
    }
    return (
      <div className={s.root}>
        {records.map(rcrd =>
          <Rcrd className={s.container} record={rcrd.rcrdName} />,
        )}
      </div>
    );
  }
}

export default withStyles(s)(Records);
