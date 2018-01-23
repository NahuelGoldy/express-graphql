import {
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLNonNull,
} from 'graphql';

const UserInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Input user payload',
  fields: () => ({
    password: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    edad: {
      type: GraphQLInt,
    },
    nombre: {
      type: GraphQLString,
    },
    apellido: {
      type: GraphQLString,
    },
  }),
});

export {
  UserInputType as default,
};
