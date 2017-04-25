
export interface ApiResponse {

    code: number 
    type: string 
    message: string 

}

export function readApiResponse(json: any): ApiResponse {

    if (!json.hasOwnProperty('code')) {
        throw 'No code property'
    }

    if (!json.hasOwnProperty('type')) {
        throw 'No type property'
    }

    if (!json.hasOwnProperty('message')) {
        throw 'No message property'
    }

    return json
}