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

export const store = async (req: Request, res: Response) => {
    const reqBody = req.body

    try {
        const postOrders = await prisma.order.create({
            data: {
                customer_first_name: reqBody.customer_first_name,
                customer_last_name : reqBody.customer_last_name, 
                customer_address   : reqBody.customer_address, 
                customer_postcode  : reqBody.customer_postcode, 
                customer_city      : reqBody.customer_city, 
                customer_email     : reqBody.customer_email, 
                customer_phone     : reqBody.customer_phone, 
                order_total        : reqBody.order_total,
            }
        })
        res.status(201).send({
            status: "succsess",
            data: postOrders
        })
    } catch (err) {
        res.status(400).send({
            status: "fail",
            message: "Couldn't make a post to oders",
            error: err,
        })
    }
}