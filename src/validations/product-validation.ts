import { body, check } from 'express-validator'
import { regexLetters } from './regex'
import { validInteger } from './check_custom_validation'


export const productValidationRules = [

    body('name')
     .isString()
     .withMessage('Name has to be a string')
     .bail()
     .isLength({min: 3})
     .withMessage("Name has to be at least 3 characters")
     .bail(),

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
     .custom(validInteger)
     .bail()
     .isInt({min: 1})
     .withMessage("Price has to be at minimum 1 integer")
     .bail(), 


    body('images')
     .isObject()
     .withMessage("Images is reguired and has to be an object with 'thumbnail' and 'large' images")
     .bail()
     .custom((image, { req }) => {
        if (!image.thumbnail && !image.large) {
            throw new Error("Both 'thumbnail' and 'large' images are required");
          } 
        else if (!image.thumbnail) {
            throw new Error("'thumbnail' images are required");
        }
        else if (!image.large) {
            throw new Error("'large' images are required");
        }
        return true;
    })
     .bail(),

      body('stock_status')
       .isString()
       .withMessage("Stock status has to be a string")
       .bail()
       .isIn(['instock', 'outofstock'])
       .withMessage("Invalid, either 'instock' or 'outofstock")
       .bail()
       .custom(regexLetters),

      body('stock_quantity')
       .isNumeric()
       .withMessage("Stock quantity is not a valid number")
       .bail()
       .custom(validInteger)
       .bail()
       .isInt({min: 0})
       .withMessage("Stock quantity has to be at minimum 0 integer")
       .bail()
]

