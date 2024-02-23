import mongoose, { mongo } from "mongoose";
import { Category } from "./category.model";
import { User } from "./user.model";

const productSchema = new mongoose.Schema(
    {
        description :
        {
            type : String,
            required : true
        },
        title : 
        {
            type: String,
            required : true,
        },
        price : 
        {
            type : Number,
            required : true
        },
        availability :
        {
            type: Boolean,
            required : true
        },
        category :
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Category",
            required : true
        },
        owner : 
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }


    },{timestamps : true});

export const Product = mongoose.model("Product", productSchema);