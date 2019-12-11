module.exports = (sequelize, type) => {
    const description = sequelize.define("descriptions", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: {
            type: type.TEXT,
            allowNull: false,
            required: true
        },
        images: {
            type: type.STRING,
            allowNull: true
        },
        url: {
            type: type.STRING,
            allowNull: true
        },
        question_id: {
            type: type.INTEGER,
            allowNull: false
        }
    });
    return description;
};