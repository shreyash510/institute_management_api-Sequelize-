const { Op } = require("sequelize");
const { Staff } = require('../model/index');

module.exports = {
    getAll: async function () {
        let staff = await Staff.findAll()
        return staff;
    },
    getById: async function (staffId) {
        let staff = await Staff.findByPk(staffId);
        return staff;
    },
    addStaff: async function (data) {
        let staff = await Staff.create(data);
        return staff? "Staff Inserted Successfully" : "Insertion failed!"
        
    },
    update: async function (staffId, staffModel) {
        let staff = await Staff.update({
            name : staffModel.name,
            courseId : staffModel.courseId,
            age : staffModel.age,
            email : staffModel.email,
            password : staffModel.password
        },{where : {staffId : staffId}});
        return staff? "Staff Updated Successfully" : "Updation failed!"
    },
    delete : async function(sId){
        let staff = await Staff.destroy({
            where : { staffId : sId}
        });
        // console.log(staff)
        return staff? "Staff Deleted Successfully" : "Deletion failed!"
    }
}