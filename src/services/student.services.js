const { Op } = require("sequelize");
const { Student } = require('../model/index');

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
    addStudent: async function (data) {
        let student = await Student.create(data);
        return student? "Student Inserted Successfully" : "Insertion failed!"
        
    },
    update: async function (studentId, studentModel) {
        let student = await Student.update({
            name : studentModel.name,
            courseId : studentModel.courseId,
            age : studentModel.age,
            email : studentModel.email,
            password : studentModel.password
        },{where : {studentId : studentId}});
        return student? "Student Updated Successfully" : "Updation failed!"
    },
    delete : async function(sId){
        let student = await Student.destroy({
            where : { studentId : sId}
        });
        // console.log(student)
        return student? "Student Deleted Successfully" : "Deletion failed!"
    }
}