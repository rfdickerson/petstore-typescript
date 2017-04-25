
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