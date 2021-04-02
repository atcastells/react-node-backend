import express from "express";

class AuthMiddleware {
    async validateUserLogin(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body.login && req.body.password) {
            next();
        } else {
            res.status(400).send({
                error: 'Incorrect data'
            })
        }
    }
}
export default new AuthMiddleware()
