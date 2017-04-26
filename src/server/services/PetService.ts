
import * as redis from 'redis'

import { Pet } from '../../models/Pet'

class PetService {

  constructor() {

  }

  addPet(p: Pet) {

    console.log('Adding pet')

    let client = redis.createClient()

    client.on('error', (err: any) => {
      console.log('error: ' + err)
    })

    client.incr('requests', redis.print)

  }

}

export { PetService }