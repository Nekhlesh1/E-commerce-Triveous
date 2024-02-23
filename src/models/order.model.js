import mongoose, { mongo } from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product",
        required : true
    },
    quantity : 
    {
        type : Number,
        required : true
    }
})
const orderSchema = new mongoose.Schema(
    {
        orderPrice :
        {
            type : Number,
            required : true 
        },
        customer : 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        orderItems : 
        {
            type : [orderItemSchema],
            required : true
        },
        address : 
        {
            type : String,
            required : true
        },
        orderStatus :
        {
            type : String,
            enum : ["pending","cancelled", "delivered"],
            default : "pending"
        }
    },
    {
        timestamps : true
    });

export const Order = mongoose.model("Order", orderSchema);