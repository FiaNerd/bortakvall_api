import express from 'express'
import { index, show, store } from '../controllers/product_controller'
import { createProductValidationRules } from '../validations/product-validation'
const routes = express.Router()

routes.get('/', index)

routes.get('/:productId', show)

routes.post('/', createProductValidationRules, store)

export default routes;