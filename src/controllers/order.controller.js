import { asyncHandler } from "../utils/asyncHandler.js";

const placeOrder = asyncHandler(async (req, res)=>{
    res.status(200).json({
        message: "order placed"
    })
})

const orderHistory = asyncHandler(async (req,res)=>{
    res.status(200).json({
        message : "Order history"
    })
})

const orderDetails = asyncHandler(async (req,res)=> {
    res.status(200).json({
        message : "Order details"
    })
})

export {placeOrder, orderHistory, orderDetails}