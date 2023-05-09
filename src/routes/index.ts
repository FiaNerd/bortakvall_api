import express from 'express'
import products from './products'
import orders from './orders'

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: "Get from route /"
    })
})

router.use('/products', products)

router.use('/orders', orders)

export default router 