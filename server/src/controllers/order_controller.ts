import { Request, Response } from "express";
import prisma from "../prisma"


// GET /order
export const index = async (req: Request, res: Response) => {
    try{
        const getOrders = await prisma.order.findMany()
        res.status(200).send({
            status: "succsess",
            data: getOrders,
        })
    }catch(err){
        res.status(400).send({
            status: "fail",
            message: "Couldn't get the order",
            error: err
        })
    }
}

// GET /orders/orderId
export const show = async (req: Request, res: Response) => {
    const orderId = req.params.orderId

    try {
        const getSingleOrder  = await prisma.order.findUniqueOrThrow({
            where:{
                id: orderId
            }
        }) 
        res.status(200).send({
            status: "succsess",
            data: getSingleOrder,
        })
    } catch (err) {
        res.status(400).send({
            status: "fail",
            message: "Couldn't get the order",
            error: err,
        })
    }
}