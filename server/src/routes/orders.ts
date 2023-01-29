import express from "express"
import { index, show } from "../controllers/order_controller"

const routes = express.Router()

routes.get("/", index)
routes.get("/:orderId", show)


export default routes