/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const Record = Model.define(
  'Record',
  {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV1,
      primaryKey: true,
    },

    bandName: {
      type: DataType.STRING(255),
    },

    rcrdName: {
      type: DataType.STRING(255),
    },

    albumArt: {
      type: DataType.STRING(255),
    },

    date: {
      type: DataType.INTEGER,
    },
  },
  {
    indexes: [{ fields: ['bandName'] }],
  },
);

export default Record;
