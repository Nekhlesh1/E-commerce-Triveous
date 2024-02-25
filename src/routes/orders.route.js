import Router from "express"
import { orderDetails, orderHistory, placeOrder } from "../controllers/order.controller.js";

const router = Router();
router.route("/details").post(orderDetails)
router.route("/history").post(orderHistory)
router.route("/place").post(placeOrder)

export default router
