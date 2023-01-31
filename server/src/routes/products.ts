import express from 'express'
import { body } from 'express-validator'
import { index, show, store } from '../controllers/product_controller'
const routes = express.Router()

routes.get('/', index)
routes.get('/:productId', show)
routes.post('/',[
    body('name').exists().isString().withMessage('has to be a string').bail().isLength({ min: 3 }).withMessage('The lenght of the name has to be at least 3 characters'),

], store)

export default routes;