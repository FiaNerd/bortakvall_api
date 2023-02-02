import { Request, Response } from 'express'
import { validationResult } from 'express-validator'
import prisma from '../prisma'


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
            message: "Couldn't get the order",
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

    interface OrderItem {
        qty: number;
        item_price: number;
        item_total: number;
        product_id: number;
      }
  
    try {
        const postOrders = await prisma.order.create({
            data: {
                customer_first_name: reqBody.customer_first_name,
                customer_last_name: reqBody.customer_last_name,
                customer_address: reqBody.customer_address,
                customer_postcode: reqBody.customer_postcode,
                customer_city: reqBody.customer_city,
                customer_email: reqBody.customer_email,
                customer_phone: reqBody.customer_phone || null,
                order_total: reqBody.order_total,
            items: {
                create: reqBody.order_items.map((item: OrderItem) => ({
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
  