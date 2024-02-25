import { asyncHandler } from "../utils/asyncHandler.js";

const viewCategory = asyncHandler(async (req,res) => {
    res.status(200).json({
        message : "Category list"
    })
})

export {viewCategory};