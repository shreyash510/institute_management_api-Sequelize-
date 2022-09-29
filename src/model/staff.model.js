const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelizeInstance) => {
    class Staff extends Model { }
    Staff.init(
        {
            // Model attributes are defined here
            staffId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            courseId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
        },{
            sequelize: sequelizeInstance,
            modelName: "Staff",
        }
    );
    return Staff;
}
