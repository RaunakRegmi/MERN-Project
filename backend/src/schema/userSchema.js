/* 
name String
email String
password String
phone String
*/

import { model, Schema } from "mongoose";

let userSchema = Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    phone:{
        type:String,
        required:[true,"phone is required"]
    },
    address:{
        type:String
    }
})

let User = model("User",userSchema)
export default User