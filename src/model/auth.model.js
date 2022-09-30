const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize("");

module.exports = (sequelizeInstance) => {
    class User extends Model { }
    User.init(
        {
            AuthId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            AuthEmail: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            AuthPassword: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize: sequelizeInstance,
            modelName: "User",
        }
    );
    return User;
}
