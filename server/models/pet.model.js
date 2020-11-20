const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"A Pet must have a name."],
        minlength:[3,"Name must be at least 3 characters."],
        maxlength:[20,"Name is to long"]
    },
    type:{
        type:String,
        required:[true,"Pet type is required."],
        minlength:[3,"Pet type must be at least 3 characters."]
    },
    description:{
        type:String,
        required:[true,"Please give us a brief description of pet."],
        minlength:[3,"Description must be at least 3 characters long."]
    },
    skill1:{
        type:String,
        default:""
    },
    skill2:{
        type:String,
        default:""
    },
    skill3:{
        type:String,
        default:""
    },
},{timestamps:true})

module.exports.Pet = mongoose.model("Pet",PetSchema)