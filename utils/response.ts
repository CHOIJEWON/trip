
export default class ResponseGenerator { 
    static genSuccess<Data>(data: Data) { 
        const response = {
            status : 200,
            message : 'success',
            data : data,
        }

        return response
    }

    static genfalse(status: number, message : string) { 
        const response = {
            status : status,
            message,
            data : null,
        }
        return response
    }
}