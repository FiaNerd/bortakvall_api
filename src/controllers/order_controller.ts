import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'
import { IOrderItem } from '../interfaces/orderItem_interface'


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
            message: "Could not get the order",
            error: err
        })
    }
}

// GET /orders/:orderId
export const show = async (req: Request, res: Response) => {
    const orderId = Number(req.params.orderId)

    try {
        const getSingleOrder  = await prisma.order.findUniqueOrThrow({
            where:{
                id: orderId
            },
            include: 
                {
                items: true,
            },
        }) 
        res.status(200).send({
            status: "succsess",
            data: getSingleOrder,
        })
    } catch (err) {
        res.status(400).send({
            status: "fail",
            message: "Could not get the order",
            error: err,
        })
    }
}


// POST /orders
export const store = async (req: Request, res: Response) => {
    const reqBody = req.body;

    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
		return res.status(400).send({
			status: "fail",
			data: validationErrors.array(),
		})
	}  
          

    try {

        for (const item of reqBody.order_items) {
            const findProducts = await prisma.product.findMany();

            const findProductById = findProducts.find(product => product.id === item.product_id);

            if (!findProductById) {
            return res.status(404).send({
                status: "fail",
                data: [{
                message: `Product not found with product id: ${item.product_id}`
                }]
            });
            }
        }

        const postOrders = await prisma.order.create({
            data: {
                customer_first_name: reqBody.customer_first_name,
                customer_last_name: reqBody.customer_last_name,
                customer_address: reqBody.customer_address,
                customer_postcode: reqBody.customer_postcode,
                customer_city: reqBody.customer_city,
                customer_email: reqBody.customer_email,
                customer_phone: reqBody.customer_phone,
                order_total: reqBody.order_total,
            items: {
                create: reqBody.order_items.map((item: IOrderItem) => ({
                qty: item.qty,
                item_price: item.item_price,
                item_total: item.item_total,
            product: {
                connect: {
                id: item.product_id,
                },
               },
            }),
            ),
        },
    },
            include: {
                items: true,
                },
            });
          
console.log(postOrders);
      res.status(201).send({
        status: "success",
        data: postOrders,
      });
    } catch (err) {
        console.log(err);
      res.status(400).send({
        status: "fail",
        message: "Couldn't make a post to orders",
        error: err,
      });
    }
  };
  