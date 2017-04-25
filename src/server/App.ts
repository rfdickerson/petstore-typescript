"use strict"

import * as bodyParser from "body-parser"
import * as express from "express"
import * as path from "path"
import * as logger from "morgan"

/**
 * The server.
 */
class App {

  public express: express.Application

  constructor() {
    this.express = express()
    this.middleware()
    this.routes()
  }

  private middleware(): void {
    this.express.use(logger('dev'))
    this.express.use(bodyParser.json())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

// Configure Express middleware
  private routes(): void {
    let router = express.Router()

    router.get('/', (req, res, next) => {
      res.json({
        message: 'hello world!'
      })
    })

    router.get('/hello', (req, res, next) => {
      res.json({
        message: 'hi there!',
        code: 200,
        id: 505
      })
    })


    this.express.use('/', router) 

  }

}

export default new App().express;