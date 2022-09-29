const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelizeInstance) => {
    class Course extends Model { }
    Course.init(
        {
            // Model attributes are defined here
            courseId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            fees: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            duration: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        },{
            sequelize: sequelizeInstance,
            modelName: "Course",
        }
    );
    return Course;
}
