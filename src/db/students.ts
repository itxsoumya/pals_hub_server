import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    fullname:{type:String,required:true},
    email:{type:String,required:false,unique:true},
    gender:{type:String,required:true},
    gpa:{type:Number,required:true}

    // under dev
    // authentication:{
    //     "salt":{type:String,required:true,select:false},
    //     "password":{type:String,required:true,select:false}
    // }
    
})

const StudentModel = mongoose.model('Student',studentSchema)


export const getStudents = ()=>StudentModel.find() 
export const getStudentByUsername=(username:string)=>StudentModel.findOne({username})
export const createStudent =(values:Record<string,any>)=>new StudentModel(values).save()