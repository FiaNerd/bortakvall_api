import { body } from 'express-validator'

export const createProductValidationRules = [
 // TODO see if you can do a validation if it the same as the databse when it's unique
    body('name').isString().withMessage('Has to be a string').bail().isLength({min: 3}).withMessage("Has to be at least 3 characters"),

    body('description').isString().withMessage("Has to be a string").bail().isLength({ min: 10, max: 500 })
    .withMessage('Description must be between 10 and 500 characters').bail(),

    body('price').isNumeric().withMessage("Has to be a integear").bail().isLength({ min: 1 }).withMessage("At least one number is required").bail(),

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

      body('stock_status').isString().withMessage("Has to be a string").bail(),

      body('stock_quantity').isNumeric().withMessage("Has to be a integear").bail(),
]
