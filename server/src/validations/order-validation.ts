import { body } from 'express-validator'
import Debug from 'debug'
const debug = Debug('prisma-bortakvall: product-controller')

export const orderValidationRules = [

    body('customer_first_name')
    .isString()
    .withMessage('First name has to be a string')
    .bail()
    .isAlpha()
    .withMessage("Only letters, no numbers")
    .bail().isLength({min: 2})
    .withMessage("Has to be at least 3 characters")
    .bail(),

    body('customer_last_name')
    .isString()
    .withMessage("Last name has to be a string")
    .bail()
    .isAlpha()
    .withMessage("Only letters, no numbers")
    .bail()
    .isLength({min: 3})
    .bail(),

    body('customer_address').isString().withMessage("Address has to be a string").bail(), 

    body('customer_postcode')
    .trim()
    .replace(/\s/g, '')
    .isString()
    .withMessage("Postcode has to be a string")
    // .isPostalCode("SE")
    .isLength({ min: 5, max: 6 })
    .withMessage('Postcode must be between 6 characters').bail()
    .matches(/^[0-9]+$/)
     .withMessage("Postcode must contain only numbers").bail(),

    
    body('customer_city')
    .isString().withMessage("City has to be a string")
    .bail()
    .isAlpha()
    .withMessage("Only letters, no numbers")
    .bail(), 

    body('customer_email').isEmail()
    .withMessage("Not a valid email")
    .bail(),

    
    body('customer_phone')
        .optional()
         .custom((value, { req }) => {
    if (value && (typeof value !== 'string' || !/^[0-9\+\(\)\-\s]+$/.test(value))) {
        throw new Error("Phone number must be a string containing only numbers");
        }
   if (value && (value.length < 7 || value.length > 14 || !/^((\+46)|0)\d{7,14}$/.test(value))) {
        throw new Error("Phone number must be between 7 and 14 characters and must be a valid Swedish phone number format");
    }
    return true;
  }),


   body('order_total')
    .isNumeric()
    .withMessage("Order total has to be a positive integer").bail()
    .matches(/^[0-9]+$/)
    .withMessage("Order total has to be a valid number").bail()
    .isInt({min: 1})
    .withMessage("Item total is minimum 1 kr in total").bail()
]


export const orderItemsValidationRules = [
    
 body('order_items.*.product_id')
 .isNumeric().withMessage("Product ID has to be a positive integer").bail()
 .isInt({min: 1})
 .withMessage("Product ID has to be at minimum 1 integer").bail(), 

 body('order_items.*.qty')
 .isNumeric()
 .withMessage("Item quantity has to be a positive integer").bail()
 .isInt({min: 1})
 .withMessage("Item quantity has to be minimum 1 quantity").bail(), 

 body('order_items.*.item_price')
 .isNumeric()
 .withMessage("Item price has to be a positive integer").bail()
 .isInt({min: 1})
 .withMessage("Item price is minimum 1 kr").bail(), 
  
 body('order_items.*.item_total')
 .isNumeric()
 .withMessage("Item quantity has to be a positive integer").bail()
 .isInt({min: 1})
 .withMessage("Item total is minimum 1 kr in total").bail(), 
]






 
