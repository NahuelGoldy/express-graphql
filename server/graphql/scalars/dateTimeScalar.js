import { GraphQLScalarType } from 'graphql';

import { isISO8601 } from 'validator';

const parseISO8601 = (value) => {
    return (new Date(value)).toISOString();
};

const serializeISO8601 = (value) => {
    return (new Date(value)).toISOString();
};

const parseLiteralISO8601 = (ast) => {
    return (new Date(ast.value)).toISOString();
};

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'An ISO-8601 encoded UTC date string.',
  serialize: serializeISO8601,
  parseValue: parseISO8601,
  parseLiteral: parseLiteralISO8601,
});

export { DateTime as default };
