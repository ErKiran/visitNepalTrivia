module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categories: {
            type: type.STRING,
            allowNull: false,
            required: true
        }
    })
}