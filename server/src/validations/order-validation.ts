import { body } from 'express-validator'

export const createOrderValidationRules = [

    body('customer_first_name').isString().withMessage('First name has to be a string').bail().isLength({min: 2}).withMessage("Has to be at least 3 characters").bail(),

    body('customer_last_name').isString().withMessage("Last name has to be a string").bail().isLength({min: 3}).bail(),

    body('customer_address').isString().withMessage("Address has to be a string").bail(), 

    body('customer_postcode').isString().withMessage("Postcode has to be a string").isLength({min:0, max:6}).withMessage("Postcode must be between 0 and 6 characters"),
    
    body('customer_city').isString().withMessage("City has to be a string").bail(), 

    body('customer_email').isEmail().withMessage("Not a valid email").bail(), 

    body('customer_phone').isString().withMessage("Phone number has to be a string").bail(),

   body('order_total').isNumeric().withMessage("Total order to be a integer").bail().isLength({min: 1}).withMessage("At least one number is required").bail(), 

]








 
