module.exports = (sequelize, type) => {
    return sequelize.define('questions', {
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
}