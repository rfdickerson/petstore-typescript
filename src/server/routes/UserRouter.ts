import * as express from 'express'

let router = express.Router()

router.get("/logout", (req, res, next) => {

  res.send("successful operation")

})

// Get user by user name
router.get("/:username", (req, res, next) => {

  if (req.params['username'] === '') {
    res.status(400).send('Invalid username supplied')
  }

  res.send("successful operation")

})

// Updated user
router.put("/:username", (req, res, next) => {

  if (req.params['username'] === '') {
    res.status(400).send('Invalid username supplied')
  }

  res.send("successful operation")

})

router.delete("/:username", (req, res, next) => {

  if (req.params['username'] === '') {
    res.status(400).send('Invalid username supplied')
  }

  res.send("successful operation")

})

export = router




