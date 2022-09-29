const { Op } = require("sequelize");
const { Course } = require('../model/index');

module.exports = {
    getAll: async function () {
        let course = await Course.findAll();
        return course;
    },
    getById: async function (cId) {
        let course = await Course.findByPk(cId);
        return course;
    },
    addCourse: async function (data) {
        let course = await Course.create(data);
        return course? "course Inserted Successfully" : "Insertion failed!"
        
    },
    update: async function (courseId, courseModel) {
        let course = await Course.update({
            name : courseModel.name,
            courseId : courseModel.courseId,
            age : courseModel.age,
            email : courseModel.email,
            password : courseModel.password
        },{where : {courseId : courseId}});
        return course? "course Updated Successfully" : "Updation failed!"
    },
    delete : async function(sId){
        let course = await Course.destroy({
            where : { courseId : sId}
        });
        // console.log(course)
        return course? "course Deleted Successfully" : "Deletion failed!"
    }
}