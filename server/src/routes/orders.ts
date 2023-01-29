import express from "express"
import { index } from "../controllers/order_controller"

const routes = express.Router()

routes.get("/", index)


export default routes