import express from 'express'
import { index, show, store } from '../controllers/product_controller'
const routes = express.Router()

routes.get('/', index)
routes.get('/:productId', show)
routes.post('/', store)

export default routes;