import express from 'express'
import { index, store } from '../controllers/product_controller'
const routes = express.Router()

routes.get('/', index)
routes.post('/', store)

export default routes;