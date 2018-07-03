import { mergeTypes } from 'merge-graphql-schemas';

const { transpileSchema } = require('graphql-s2s').graphqls2s

const User = require('./user');
const Trainer = require('./trainer');
const Plan = require('./plan');
const Workout = require('./workout');
const Exercise = require('./exercise');

const types = [
    transpileSchema(
        User.concat(Trainer)
            .concat(Plan)
            .concat(Workout)
            .concat(Exercise)
    )
];

export = mergeTypes(types, { all: true });
