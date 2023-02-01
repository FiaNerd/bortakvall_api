import { body } from 'express-validator'

export const createOrderValidationRules = [

    body('customer_first_name').isString().withMessage('First name has to be a string').bail().isLength({min: 2}).withMessage("Has to be at least 3 characters").bail(),

    body('customer_last_name').isString().withMessage("Last name has to be a string").bail().isLength({min: 3}).bail(),

    body('customer_address').isString().withMessage("Address has to be a string").bail(), 

    body('customer_postcode')
  .isString()
  .withMessage("Postcode has to be a string")
  .isLength({ min: 6, max: 6 })
    .withMessage('Postcode must be between 6 characters').bail()
  .matches(/^[0-9]+$/)
     .withMessage("Postcode must contain only numbers").bail(),

    
    body('customer_city').isString().withMessage("City has to be a string").bail(), 

    body('customer_email').isEmail().withMessage("Not a valid email").bail(), 

    body('customer_phone')
  .isString()
  .withMessage("Phone number has to be a string").bail()
  .isLength({ min: 7, max: 14 })
    .withMessage('Phone number must be between 7 and 14 characters')
  .matches(/^[0-9\+\(\)\-\s]+$/)
    .withMessage("Phone number can only contain numbers, '+', '(', ')', '-' and spaces").bail()
  .matches(/^((\+46)|0)\d{7,14}$/)
    .withMessage("Phone number must be a valid Swedish phone number format").bail(),


   body('order_total').isNumeric().withMessage("Total order to be a integer").bail().isLength({min: 1}).withMessage("At least one number is required").bail(), 

]


export const orderItemsValidation = [
 body('order_items.*.product_id')
 .isInt().withMessage('Product id must be a positive integer').bail()

 .isLength({ min: 1 }).withMessage('Product id must be at least one integer is requeired').bail(), 

 body('order_items.*.qty').exists().isInt().withMessage("Item quantity has to be a positive integer").bail().isLength({min: 1}).withMessage("At least one number is required").bail(), 

 body('order_items.*.item_price')
 .isInt().withMessage("Item Price has to be a integer").bail()
 .isLength({min: 1}).withMessage("At least one number is required").bail(), 
  
 body('order_items.*.item_total').isInt().withMessage("Item Total has to be a integer").bail().isLength({min: 1}).withMessage("At least one number is required").bail()

]






 
