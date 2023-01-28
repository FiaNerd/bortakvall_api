import express from 'express'
import { index } from '../controllers/product_controller'
const routes = express.Router()

routes.get('/', index)

export default routes;