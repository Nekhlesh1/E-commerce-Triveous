import { Router } from "express";
import { addProduct, deleteProduct, getProdById, updateProduct, viewProucts } from "../controllers/product.controller.js";
const router = Router();

router.route("/add" ).post(addProduct);
router.route("/delete").post(deleteProduct);
router.route("/update").post(updateProduct);
router.route("/viewProducts").post(viewProucts);
router.route("/view/?id").post(getProdById);
export default router