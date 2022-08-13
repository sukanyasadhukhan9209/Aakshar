const mongoose = require('mongoose');
const User = require('../model/User');
const Classroom = require('../model/Classroom');

const StudentSchema = new mongoose.Schema({


    Student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
    First_name: String,

    Last_name : String,

    Email: String,

    Date_of_join: Date ,

    Age: String,

    Gender: String,

    Gurdian_name:String,

    Classrooms : [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Classroom'
        }
    ],

});



module.exports =  mongoose.model('Student',StudentSchema);  // this module "User.js" will export mongoose model object