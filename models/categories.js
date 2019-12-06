module.exports = (sequelize, type) => {
    const categories = sequelize.define('categories', {
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

    return categories
}