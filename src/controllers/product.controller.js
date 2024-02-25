import { asyncHandler } from "../utils/asyncHandler.js";

const viewProucts = asyncHandler(async (req,res)=> {
    res.status(200).json({
        message : "Product list"
    })
})

const getProdById = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message: "Prod by id"
    })
})
const addProduct = asyncHandler(async (req, res) => {
    res.status(200).json({
        message : "Product added"
    })
})

const deleteProduct = asyncHandler(async (req,res) =>{
    res.status(200).json({
        message : "Product deleted"
    })
})

const updateProduct = asyncHandler( async (req, res) => {
    res.status(200).json({
        message : "Product updated"
    })
})

export {addProduct, deleteProduct, viewProucts, updateProduct, getProdById }