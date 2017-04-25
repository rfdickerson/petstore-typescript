import * as express from 'express'


let router = express.Router()

router.get("/user/logout", (req, res, next) => {

  res.send("successful operation")

})

router.get("/user/:username", (req, res, next) => {

  if (req.params['username'] === '') {
    res.status(400).send('Invalid username supplied')
  }

  res.send("successful operation")

})

export = router




