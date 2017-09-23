/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLInt as DateType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const RcrdType = new ObjectType({
  name: 'Record',
  fields: {
    id: { type: new NonNull(ID) },
    bandName: { type: StringType },
    rcrdName: { type: StringType },
    albumArt: { type: StringType },
    date: { type: DateType },
  },
});

export default RcrdType;
