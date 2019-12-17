const Sequelize = require("sequelize");

const conf = require('./config');
const CategoriesModel = require("./models/categories");
const QuestionModel = require("./models/question");
const OptionsModel = require("./models/options");
const DescriptionModel = require("./models/description");

 const sequelize = new Sequelize(conf.database, conf.user, conf.password, {
    host: conf.host,
    dialect: conf.dialect,
    port: conf.port,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});


const Categories = CategoriesModel(sequelize, Sequelize);
const Question = QuestionModel(sequelize, Sequelize);
const Options = OptionsModel(sequelize, Sequelize);
const Description = DescriptionModel(sequelize, Sequelize);

Question.belongsTo(Categories, {
    foreignKey: "categories_id",
    targetKey: "id"
});

Question.hasOne(Description, {
    foreignKey: "questions_id",
    targetKey: "id"
});

Options.belongsTo(Question, {
    foreignKey: "questions_id",
    targetKey: "id"
});



sequelize.sync({ force: true })
    .then(() => {
        // eslint-disable-next-line no-console
        console.log("Database and Table crated");
    });

module.exports = {
    Categories,
    Question,
    Options,
    Description,
    sequelize
};