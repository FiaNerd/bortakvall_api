import { body } from 'express-validator'

export const createProductValidationRules = [
 // TODO see if you can do a validation if it the same as the databse when it's unique
    body('name').isString().withMessage('Name has to be a string').bail().isLength({min: 3}).withMessage("Name has to be at least 3 characters"),

    body('description').isString().withMessage("Description has to be a string").bail().isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters').bail(),

    body('price').isNumeric().withMessage("Price to be a integer").bail().isLength({ min: 1 }).withMessage("At least one number is required").bail(),

    body('images').custom((image, {req}) => {
        if (!image.thumbnail) {
          throw new Error("'thumbnail' images are required")
        }
        if(!image.large) {
            throw new Error("'large' images are required")
        }
        console.log(image);
        return true
      }).bail(),

      body('stock_status').isString().withMessage("Stock status has to be a string").bail(),

      body('stock_quantity').isNumeric().withMessage("Stock quantity has to be a integer").bail(),
]
