import { Router } from "express";
import User from "../schema/userSchema.js";

let userRoute =Router()
userRoute
.route("/:id")
.get(async(req,res,next)=>{
try {
    let result = await User.findById(req.params.id)
    res.status(200).json({
        success:true,
        message:"User read successfully.",
        result:result
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
}
})
.delete(async(req,res,next)=>{
try {
    let result = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"User Deleted Successfully.",
        result:result
    })
} catch (error) {
    res.status(400).json({
        success:false,
        message:error.message
    })
}
})
.patch(async(req,res,next)=>{
    try {
        let result = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({
            success:true,
            message:"User Updated successfully",
            result:result
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})
userRoute
.route("/")
.post(async(req,res,next)=>{
    try {
        let result= await User.create(req.body)
        res.status(200).json({
            success:true,
            message:"User created successfully",
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})
.get(async(req,res,next)=>{
    try {
        let result = await User.find()
        res.status(200).json({
            success:true,
            message:"User read successfully.",
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})


export default userRoute