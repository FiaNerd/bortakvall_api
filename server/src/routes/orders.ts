import express from "express"
import { index, show, store } from "../controllers/order_controller"

const routes = express.Router()

routes.get("/", index)
routes.get("/:orderId", show)
routes.post("/", store)

export default routes