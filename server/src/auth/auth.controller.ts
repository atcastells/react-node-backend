import express from "express";
import {User} from "./user";

class AuthController {
    async authUser(req: express.Request, res: express.Response) {
        const user: User = {
            login: req.body.login,
            password: req.body.password
        }

        res.status(200).send(user)
    }
}
export default new AuthController();
