import express from "express"
import { index, show, store } from "../controllers/order_controller"
import { createOrderValidationRules } from "../validations/order-validation"

const routes = express.Router()

routes.get("/", index)
routes.get("/:orderId", show)
routes.post("/",createOrderValidationRules, store)

export default routes