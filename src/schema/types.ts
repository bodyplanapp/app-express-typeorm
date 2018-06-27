import { mergeTypes } from 'merge-graphql-schemas';

const { transpileSchema } = require('graphql-s2s').graphqls2s

const User = require('./user');
const Trainer = require('./trainer');

const types = [transpileSchema(User.concat(Trainer))];

export = mergeTypes(types, { all: true });
