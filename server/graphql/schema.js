import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import userMutations from './users/userMutations';
import userQueries from './users/userQueries';
import taskQueries from './tasks/taskQueries';
import taskMutations from './tasks/taskMutations';
import profesionQueries from './profesiones/profesionQueries';
import profesionMutations from './profesiones/profesionMutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...userQueries,
      ...taskQueries,
      ...profesionQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...userMutations,
      ...taskMutations,
      ...profesionMutations,
    }),
  }),
});
