const Categories = require('./categories');
const Question = require('./question');
const Options = require('./options');


Question.hasOne(Categories);
Question.hasMany(Options);