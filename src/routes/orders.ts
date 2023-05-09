import express from "express"
import { index, show, store } from "../controllers/order_controller"
import { orderValidationRules, orderItemsValidationRules } from "../validations/order-validation"

const routes = express.Router()

    // Här liggger alla routes som är kopplade till controllern och valideringar
    routes.get("/", index)

    routes.get("/:orderId", show)
    
    routes.post("/", orderValidationRules,orderItemsValidationRules, store)

export default routes