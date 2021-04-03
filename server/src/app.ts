import express from 'express';
import AppRoutes from './app.routes'

class App {
    public express = require('express')
    private routes;

    constructor(){
        this.express = express();
        this.configureApp();
        this.routes = new AppRoutes(this.express);
        this.initializeControllers();
    }

    private configureApp() {
        const cors = require('cors');
        this.express.use(express.json({type: 'application/json'}));
        this.express.use(cors())
    }

    private initializeControllers() {
        this.routes.registerRoutes();
    }
}

export default new App().express
