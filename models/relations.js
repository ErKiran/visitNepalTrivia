const Categories = require('./categories');
const Question = require('./question');
const Options = require('./options');


Question.hasOne(Categories);
Question.hasMany(Options);

async function name(){try{}catch(e){throw new Error(`This is the error 'e'`)}}