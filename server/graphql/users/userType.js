import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import DateTimeScalar from '../scalars/dateTimeScalar';

const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nombre: {
      type: new GraphQLNonNull(GraphQLString),
    },
    apellido: {
      type: new GraphQLNonNull(GraphQLString),
    },
    edad: {
      type: GraphQLInt,
    },
    createdAt: {
      type: new GraphQLNonNull(DateTimeScalar),
    },
    updatedAt: {
      type: new GraphQLNonNull(DateTimeScalar),
    },
  }),
});

export {
  UserType as default,
};
