import * as express from 'express'

import { PetService } from '../services/PetService'
import { Pet } from '../../models/Pet'

let router = express.Router()

// Add a new pet to the store
router.post("/", (req, res, next) => {

  let service = new PetService()

  let pet: Pet = {
    id: 1,
    name: "Scruffy",
    photoUrls: ["https://s-media-cache-ak0.pinimg.com/originals/4e/d2/23/4ed2237e77c5a57da0c5401f8cc549d1.jpg"],
    tags: ["dog", "hairy"],
    status: "normal"

  }

  service.addPet(pet)
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
  // res.send("successful operation")

  let pet: Pet = {
    id: 1,
    name: "Scruffy",
    photoUrls: ["https://s-media-cache-ak0.pinimg.com/originals/4e/d2/23/4ed2237e77c5a57da0c5401f8cc549d1.jpg"],
    tags: ["dog", "hairy", "cute"],
    status: "normal"

  }

  res.json(pet)

})

// Uploads an image
router.post(":petId/uploadImage", (req, res, next) => {
  res.send("successful operation")
})

export = router

