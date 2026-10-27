import { Router } from "express";

let reviewRoute = Router()
reviewRoute
.route("/")
.post((req,res,next)=>{
    res.json({success:true, message:"product create successfully"})
})
.get((req,res,next)=>{
    res.json({success:true, message:"product read successfully"})
})

reviewRoute
.route("/:id")
.get((req,res,next)=>{
    res.json({success:true, message:"product read successfully"})
})
.patch((req,res,next)=>{
    res.json({success:true, message:"product updated successfully"})
})
.delete((req,res,next)=>{
    res.json({success:true, message:"product deleted successfully"})
})
export default reviewRoute