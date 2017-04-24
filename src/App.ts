"use strict"

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as logger from "morgan";

/**
 * The server.
 */
class App {

  public express: express.Application;

  constructor() {
    this.express = express()
    this.middleware()
    this.routes()

    // this.config();

  }

  private middleware(): void {
    this.express.use(logger('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  private routes(): void {
    let router = express.Router()

    router.get('/', (req, res, next) => {
      res.json({
        message: 'hello world!'
      })
    })


    this.express.use('/', router) 

  }

}

export default new App().express;