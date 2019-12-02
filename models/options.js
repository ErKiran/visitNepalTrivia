module.exports = (sequelize, type) => {
    return sequelize.define('options', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        option: {
            type: type.STRING,
            allowNull: false,
            required: true
        },
        is_correct: {
            type: type.BOOLEAN,
            allowNull: false,
            default: false
        },
        question_id: {
            type: type.INTEGER,
            references: {
                model: 'questions',
                key: 'id'
            }
        }
    })
}