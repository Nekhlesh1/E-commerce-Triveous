import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res)=> {
    res.status(200).json({
        message : "User registered"
    })
})

const signInUser = asyncHandler(async (req,res) =>{
    res.status(200).json({
        message : "USer signed in"
    })
})
export {
    registerUser, signInUser
}