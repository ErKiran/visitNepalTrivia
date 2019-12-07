module.exports = (sequelize, type) => {
    const questions = sequelize.define('questions', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        question: {
            type: type.STRING,
            allowNull: false,
            required: true
        },
        multiple_correct_options: {
            type: type.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        categories_id: {
            type: type.INTEGER,
            allowNull: false
        }
    })
    return questions;
}