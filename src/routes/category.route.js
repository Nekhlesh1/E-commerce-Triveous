import Router from "express"
import { viewCategory } from "../controllers/category.controller.js";
const router = Router();

router.route("/view").post(viewCategory);
export default router