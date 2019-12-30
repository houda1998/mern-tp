const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String,required:true,unique:true },
    gender:{type: String ,enum : ['male','female']},
    dob:{type:Date},
    news:{type:Boolean,default:true},
    email: { type:String, required : true,unique:true},
    photo:{type:String,default:"http://www.lorempixel.com/300/300"}
}, {
    timestamps: true,
})
module.exports = mongoose.model("User", UserSchema)
