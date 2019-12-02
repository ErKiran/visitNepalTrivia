const Sequelize = require('sequelize');
const CategoriesModel = require('./models/categories');
const QuestionModel = require('./models/question');
const OptionsModel = require('./models/options');


const sequelize = new Sequelize('SQLQUIZ', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Categories = CategoriesModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);
const Options = OptionsModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database and Table crated`)
    })

module.exports = {
    Categories,
    Question,
    Options
}    