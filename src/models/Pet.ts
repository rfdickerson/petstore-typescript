
export interface Pet {
    id: number;
}

export function printPet(pet: Pet) {
    console.log(pet.id);
}