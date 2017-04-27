
export interface Pet {

    id: number

    name: string

    photoUrls: Array<string>
    
    tags: Array<string>

    // pet status in the store
    status: string 
}

export function printPet(pet: Pet) {
    console.log(pet.id);
}

export function readPetJSON(json: any): Pet {

    if (!json.hasOwnProperty('id')) {
        throw 'No code property'
    }

    if (!json.hasOwnProperty('name')) {
        throw 'No type property'
    }

    if (!json.hasOwnProperty('photoUrls')) {
        throw 'No message property'
    }

    if (!json.hasOwnProperty('tags')) {
        throw 'No message property'
    }

    if (!json.hasOwnProperty('status')) {
        throw 'No message property'
    }

    return json
}