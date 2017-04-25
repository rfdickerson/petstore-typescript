
export interface Order {

  id: number

  petId: number 

  quantity: number

  shipDate: string

  // Order status
  status: string

  complete: boolean

}