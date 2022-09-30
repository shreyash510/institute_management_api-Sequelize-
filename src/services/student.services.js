const { Op } = require("sequelize");
const { Student } = require('../model/index');
const bcrypt = require('bcrypt');

module.exports = {
    getAll: async function () {
        let student = await Student.findAll({
            attributes: { exclude: ["password"] },
        })
        return student;
    },
    getById: async function (studentId) {
        let student = await Student.findByPk(studentId, {
            attributes: { exclude: ["password"] },
        });
        return student;
    },
    update: async function (studentId, studentModel) {
        let student = await Student.update({
            name: studentModel.name,
            courseId: studentModel.courseId,
            age: studentModel.age,
            email: studentModel.email,
            password: studentModel.password
        }, { where: { studentId: studentId } });
        return student ? "Student Updated Successfully" : "Updation failed!"
    },
    delete: async function (sId) {
        let student = await Student.destroy({
            where: { studentId: sId }
        });
        return student ? "Student Deleted Successfully" : "Deletion failed!"
    },
    login: async function ({ email, password }) {
        let student = await Student.findOne({ where: { email } });
        if (student) {
            let isPasswordCorrect = await bcrypt.compare(password, student.password);
            return isPasswordCorrect ? "Login Susccessfully!" : "Invalid Username and Password!"
        } else {
            return "Student Not Found"
        }
    },
    addStudent: async function (data) {
        const email = data.email;
        let isExist = await Student.findOne({ where: { email } });
        if (!isExist) {
            data.password = bcrypt.hashSync(data.password, 12);
            let student = await Student.create(data);
            return student ? "Student Inserted Successfully" : "Insertion failed!"
        } else {
            return "Student already Available"
        }

    }

}