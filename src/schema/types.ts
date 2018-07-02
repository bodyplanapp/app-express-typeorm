import { mergeTypes } from 'merge-graphql-schemas';

const { transpileSchema } = require('graphql-s2s').graphqls2s

const User = require('./user');
const Trainer = require('./trainer');
const Plan = require('./plan');

const types = [transpileSchema(User.concat(Trainer).concat(Plan))];

export = mergeTypes(types, { all: true });
