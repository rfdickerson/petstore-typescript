import * as express from 'express'

import { PetService } from '../services/PetService'

let router = express.Router()

// Add a new pet to the store
router.post("/", (req, res, next) => {

  let service = new PetService()
  service.addPet()
  res.send("successful operation")

})

// Update an existing pet
router.put("/", (req, res, next) => {


})

// Finds Pets by status
router.get("/findByStatus", (req, res, next) => {

})

// Find pet by ID
router.get("/:petId", (req, res, next) => {
  res.send("successful operation")
})

export = router

