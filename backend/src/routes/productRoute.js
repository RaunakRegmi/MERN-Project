import { Router } from "express";
import Product from "../schema/productSchema.js";

let productRoute = Router()
productRoute
.route("/")
.post(async(req,res,next)=>{

    try {
        let result = await Product.create(req.body)
        res.status(200).json({
            success:true,
            message:"Product created successfully.",
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
        let result = await Product.find()
        res.status(200).json({
            success:true,
            message:"Product Read successfully",
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})

productRoute
.route("/:id")
.get(async(req,res,next)=>{
    try {
        let result = await Product.findById(req.params.id)
        res.status(200).json({
            success:true,
            message:"Product read successfully",
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
        let result = await Product.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(200).json({
            success:true,
            message:"Product updated successfully",
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
        let result = await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"Product deleted successfully",
            result:result
        })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
})
export default productRoute



/*
Product
name
price
quantity
description
*/


