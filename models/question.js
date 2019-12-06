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
        categories_id: {
            type: type.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        }
    })

    questions.associate = (models) => {
        models.questions.hasOne(models.categories, {
            foreignKey: {
                allowNull: false,
                required: true,
                fieldName: 'categories_id'
            },
            targetkey: 'id',
            onDelete: 'CASCADE'
        })
    }

    return questions;
}