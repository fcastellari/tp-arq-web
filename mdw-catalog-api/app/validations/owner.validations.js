const { check, validationResult } = require('express-validator/check');
exports.validateOwner = (method) => {
    switch (method) {
        case 'create': {
            return [
                check('username')
                    .exists().withMessage("Username must be filled")
                    .isLength({ min: 8, max: 16 }).withMessage("Username must be at least 8 characters, up to 16")
                    .trim()
                    .escape(),
                check('name')
                    .exists().withMessage("Name doesn't exists")
                    .escape(),
                check('email')
                    .isEmail().withMessage("Invalid Email")
                    .normalizeEmail(),
                check('isActive')
                    .optional()
                    .isBoolean()
            ]
        }
        case 'update': {

        }

        case 'find': {

        }

    }
}