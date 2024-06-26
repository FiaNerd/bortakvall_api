import { body } from 'express-validator'

export const productValidationRules = [

    body('name')
        .trim()
        .isString()
        .withMessage('Name has to be a string')
        .bail()
        .isLength({min: 3})
        .withMessage("Name has to be at least 3 characters")
        .bail(),

    body('description')
        .trim()
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
        .isInt()
        .bail()
        .isInt({min: 1})
        .withMessage("Price has to be at minimum 1 integer")
        .bail(), 


    body('images')
        .custom((value) => {
          if (!value || typeof value !== 'object' || !('thumbnail' in value) || !('large' in value)) {
            throw new Error('Images must be an object with "thumbnail" and "large" properties');
          }
          return value;
        }),

    body('stock_status')
       .trim()
       .isString()
       .withMessage("Stock status has to be a string")
       .bail()
       .isIn(['instock', 'outofstock'])
       .withMessage("Invalid, either 'instock' or 'outofstock")
       .bail(),

    body('stock_quantity')
       .isNumeric()
       .withMessage("Stock quantity is not a valid number")
       .bail()
       .isInt()
       .bail()
       .isInt({min: 0})
       .withMessage("Stock quantity has to be at minimum 0 integer")
       .bail()
]

