import { body, check } from 'express-validator'

export const productValidationRules = [

    body('name')
     .isString()
     .withMessage('Name has to be a string')
     .bail()
     .isLength({min: 3})
     .withMessage("Name has to be at least 3 characters"),

    body('description')
     .isString()
     .withMessage("Description has to be a string")
     .bail()
     .isLength({ min: 10, max: 500 })
     .withMessage('Description must be between 10 and 500 characters')
     .bail(),

    body('price')
     .isNumeric()
     .withMessage("Price is not a valid number")
     .bail()
     .matches(/^[0-9]+$/)
     .withMessage("Price has to be a valid number")
     .bail()
     .isInt({min: 1})
     .withMessage("Price has to be at minimum 1 integer")
     .bail(), 


    body('images')
     .isObject()
     .custom((image, { req }) => {
        
        if (!image.thumbnail) {
            throw new Error("'thumbnail' images are required");
        }
        if (!image.large) {
            throw new Error("'large' images are required");
        }
        return true;
    })
     .bail(),

      body('stock_status')
       .isString()
       .withMessage("Stock status has to be a string")
       .bail(),

      body('stock_quantity')
       .isNumeric()
       .withMessage("Stock quantity is not a valid number")
       .bail()
       .bail()
       .isInt({min: 0})
       .withMessage("Stock quantity has to be at minimum 0 integer")
       .bail()
       .matches(/^[0-9]+$/)
       .withMessage("Stock quantity has to be a valid number")
       .bail(), 
]

