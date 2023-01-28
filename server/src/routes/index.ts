import express from 'express'
import products from './products'

const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: "Get from route /"
    })
})

router.use('/products', products)

export default router 