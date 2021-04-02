import express, {Express, } from 'express';
import AuthMiddleware from "./auth/auth.middleware";
import AuthController from  "./auth/auth.controller";

class AppRoutes {
    private express;

    constructor(_express: Express) {
        this.express = _express;
    }

    public registerRoutes() {
        const router = express.Router();

        router.get('/', ((req, res) => {
            res.json(
                {
                    message: 'React / Node test'
                }
            )
        }))

        this.express.route('/api/auth')
            .get((req, res) => {
                res.status(200).send('Auth endpoint')
            })
            .post(
                AuthMiddleware.validateUserLogin,
                AuthController.authUser
            )

        this.express.use('/', router)
    }
}

export default AppRoutes;
