const { Model, Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

module.exports = (sequelizeInstance) => {
    class Student extends Model { }
    Student.init(
        {
            // Model attributes are defined here
            studentId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            courseId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize: sequelizeInstance,
            modelName: "Student",
        }
    );
    return Student;
}
// Student.sync().then(() => {
//     console.log("Table and model synced successfully!")
// }).catch((error) => {
//     console.log("Error syncing the table and model!");
// })

// console.log(User === sequelize.models.User); // true

// `sequelize.define` also returns the model

