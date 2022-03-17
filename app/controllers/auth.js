/********************
 * Public functions *
 ********************/

/**
 * Register function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 * @param {Object} next - call next middleware
 */
exports.register = (req, res, next) => {
    res.send("Register Route");
}

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
exports.login = (req, res) =>{
    res.send("Login Route");
}

