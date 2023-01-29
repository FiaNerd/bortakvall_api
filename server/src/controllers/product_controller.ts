import { Request, Response } from 'express'
import prisma from '../prisma'

// GET /products
export const index = async (req: Request, res: Response) => {
    try{
        const getProducts = await prisma.product.findMany()
        res.status(200).send({
            status: "success",
            data: getProducts,
        })
    }catch(err){
        console.error(err)
        res.status(400).send({
            status: "fail",
            message: "Couldn't get the products",
            error: err,
        })
    }
}

//GET /products/:productId
export const show = async (req: Request, res: Response) => {
    const productId = Number(req.params.productId)

    try {
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
    try{
        const postProduct = await prisma.product.create({
            data: {
                name: reqBody.name,      
                description: reqBody.description,    
                price: reqBody.price,         
                images: reqBody.images,         
                stock_status: reqBody.stock_status,   
                stock_quantity: reqBody.stock_quantity 
            }
        })

        res.status(201).send({
            status: "succsess",
            data: postProduct
        })
    }catch(err){
        console.error(err)
        res.status(500).send({
            status: "fail",
            message: "Couldn't get the products",
            error: err
        })
    }
}

