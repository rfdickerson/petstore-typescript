"use strict"

import * as bodyParser from "body-parser"
import * as express from "express"
import * as path from "path"
import * as logger from "morgan"

import * as userRouter from "./routes/UserRouter"
import * as petRouter from "./routes/PetRouter"
import * as storeRouter from "./routes/StoreRouter"

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

    this.express.use('/', router) 

    router.get("/data.json", (req, res, next) => {
      res.json({
         message: 'I came from the server',
         code: 200
       })
    })

    router.use('/user', userRouter )
    router.use('/pet', petRouter)

     router.use(express.static('./'))


  }

}

export default new App().express;