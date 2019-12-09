const Sequelize = require('sequelize');
const CategoriesModel = require('./models/categories');
const QuestionModel = require('./models/question');
const OptionsModel = require('./models/options');
const DescriptionModel = require('./models/description');

const sequelize = new Sequelize('SQLQUIZ', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
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
const Description = DescriptionModel(sequelize, Sequelize);

Question.belongsTo(Categories, {
    foreignKey: 'categories_id',
    targetKey: 'id'
});

Description.belongsTo(Question, {
    foreignKey: 'question_id',
    targetKey: 'id'
})

Options.belongsTo(Question, {
    foreignKey: 'questions_id',
    targetKey: 'id'
});



sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database and Table crated`)
    })

module.exports = {
    Categories,
    Question,
    Options,
    Description,
    sequelize
}