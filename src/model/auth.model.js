const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize("");

module.exports = (sequelizeInstance) => {
    class User extends Model { }
    User.init(
        {
            authId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            authEmail: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            authPassword: {
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
