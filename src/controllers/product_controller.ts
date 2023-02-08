import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'

import Debug from 'debug'
const debug = Debug('prisma_bortakvall:product_controller')

// GET /products
export const index = async (req: Request, res: Response) => {
    
    try{
        const getProducts = await prisma.product.findMany()
        res.status(200).send({
            status: "success",
            data: getProducts,
        })
    }catch(err){
        res.status(500).send({
            status: "fail",
            message: "Internal serverCouldn't get the products",
            error: err,
        })
    }
}

//GET /products/:productId
export const show = async (req: Request, res: Response) => {
    const productId = Number(req.params.productId)

    try {

     
        const productExist = await prisma.product.findUnique({
           where: { 
            id: productId
            }
        })
   
        if(!productExist){
           return res.status(400).send({ 
               status: 'fail',
               data: [{ 
                   message: `Product with id '${productId}' dosn't exists` }] 
           });
        }



        const getSingleProduct = await prisma.product.findUniqueOrThrow({
            where:{
                id: productId
            }
        })
        res.status(200).send({
            status: "succsess",
            data: getSingleProduct
        })
    } catch (err) {
        debug("Error thrown product: ", req.params.productId)

        res.status(500).send({
            status: "fail",
            message: "Couldn't get at single product",
            error: err
        })
    }
}

// POST /products
export const store = async (req: Request, res: Response) => {
    const reqBody = req.body

    debug("Error thrown product %o: %o", req.body)

    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		})
	}

   

    try{
        const { name } = req.body
        const productExist = await prisma.product.findUnique({
           where: { name }
        })
   
        if(productExist){
           return res.status(400).send({ 
               status: 'fail',
               data: [{ 
                   message: `Product '${name}' already exists ` }] 
           });
        }
    
        const postProduct = await prisma.product.create({
            data: {
                name: reqBody.name,      
                description: reqBody.description,    
                price: reqBody.price,         
                images: reqBody.images,         
                stock_status: reqBody.stock_status,   
                stock_quantity: reqBody.stock_quantity, 
            }
        })
        debug("postProduct: %o", postProduct)

              res.status(201).send({
                  status: "succsess",
                  data: postProduct
              })

    }catch(err){
        debug("Error for post product: %o", reqBody.status, err)

        res.status(500).send({
            status: "error",
            message: "Internal server error. Couldn't post the products",
            error: err
        })
        
    }
}
