import { body } from 'express-validator'
import { regexLettersAndHyphans, regexPhone, regexPostalCode } from './regex'
import Debug from 'debug'
const debug = Debug('prisma-bortakvall: product-controller')

export const orderValidationRules = [

    body('customer_first_name')
        .trim()
        .isString()
        .toLowerCase()
        .withMessage('First name has to be a string')
        .bail()
        .notEmpty()
        .withMessage("It's required to add a first name")
        .bail()
        .custom(regexLettersAndHyphans)
        .bail()
        .isLength({min: 2})
        .withMessage("Has to be at least 2 characters")
        .bail(),

    body('customer_last_name')
        .trim()
        .toLowerCase()
        .isString()
        .withMessage("Last name has to be a string")
        .bail()
        .notEmpty()
        .withMessage("It's required to add a last name")
        .bail()
        .custom(regexLettersAndHyphans)
        .bail()
        .isLength({min: 3})
        .withMessage("Has to be at least 3 characters")
        .bail(),

    body('customer_address')
        .trim()
        .toLowerCase()
        .isString()
        .withMessage("Address has to be a string")
        .bail()
        .notEmpty()
        .withMessage("It's required to add a adress")
        .bail()
        .isLength({min: 3})
        .withMessage("Has to be at least 3 characters")
        .bail(), 

    body('customer_postcode')
        .trim()
        .isString()
        .withMessage("Postcode has to be a string")
        .bail()
        .isLength({ min: 5, max: 6 })
        .withMessage('Postcode must be between 5 and 6 characters')
        .bail()
        .custom(regexPostalCode)
        .bail(),
    
    body('customer_city')
        .trim()
        .toLowerCase()
        .isString()
        .withMessage("City has to be a string")
        .bail()
        .notEmpty()
        .withMessage("It's required to add a city")
        .bail()
        .custom(regexLettersAndHyphans)
        .bail()
        .isLength({min: 3})
        .withMessage("Has to be at least 3 characters")
        .bail(), 

    body('customer_email')
      .trim()
      .toLowerCase()
      .isEmail()
      .withMessage("Not a valid email")
      .bail(),

    body('customer_phone')
        .trim()
        .optional()
        .custom(regexPhone),

    body('order_total')
        .isNumeric()
        .withMessage("Order total i not a valid number")
        .bail()
        .isInt()
        .bail()
        .isInt({min: 1})
        .withMessage("Item total is minimum 1 kr in total")
        .bail()
]


export const orderItemsValidationRules = [
    
    body('order_items.*.product_id')
        .isNumeric()
        .withMessage("Product id is not a valid number")
        .bail()
        .isInt()
        .bail()
        .isInt({min: 1})
        .withMessage("Product ID has to be at minimum 1 integer")
        .bail(), 

    body('order_items.*.qty')
        .isNumeric()
        .withMessage("Quantity is not a valid number")
        .bail()
        .isInt()
        .bail()
        .isInt({min: 1})
        .withMessage("Item quantity has to be minimum 1 quantity")
        .bail(), 

    body('order_items.*.item_price')
        .isNumeric()
        .withMessage("Item price is not a valid number")
        .bail()
        .isInt()
        .bail()
        .isInt({min: 1})
        .withMessage("Item price is minimum 1 kr").bail(), 
    
    body('order_items.*.item_total')
        .isNumeric()
        .withMessage("Item total is not a valid number")
        .bail()
        .isInt()
        .bail()
        .isInt({min: 1})
        .withMessage("Item total is minimum 1 kr in total")
        .bail(), 
]






 
