/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import RcrdType from '../types/RcrdType';

const rcrds = {
  type: RcrdType,
  resolve({ request }) {
    return (
      request.record && {
        id: request.record.id,
        bandName: request.record.bandName,
        rcrdName: request.record.rcrdName,
        albumArt: request.record.albumArt,
        date: request.record.date,
      }
    );
  },
};

export default rcrds;
