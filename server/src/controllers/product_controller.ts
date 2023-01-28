import { Request, Response } from 'express'
import prisma from '../prisma'

export const index = async (req: Request, res: Response) => {
    try{
        const getProducts = await prisma.product.findMany()
        res.status(200).send({
            status: "success",
            data: getProducts
        })
    }catch(err){
        res.status(404).send({
            status: "fail",
            data: "Coudn't get the products"
        })
    }
}