import { model, Schema } from "mongoose"


let jobSchema = Schema({
    title:{
        type:String,
        required:[true,"Title is required"]
    },
    salary:{
        type:Number,
        required:[true,"Salary is required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    description:{
        type:String
    }

})

let Job = model("Job", jobSchema)
export default Job
