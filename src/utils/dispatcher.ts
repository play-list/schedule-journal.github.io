import ClassRoom from "../models/classroom";

export interface BaseService {
    get(url: string, body?: any): Promise<Response>
    post(url: string, body?: any): Promise<Response>
    put(url: string, body?: any): Promise<Response>
    delete(url: string, body?: any): Promise<Response>
}

export default class Fetcher {
    get(url: string, body?: any, params?: Object): Promise<ClassRoom.Model[]> {
        return fetch(initRequest(url, params), {
            method: 'GET',
            body: body
        }).then(result => {
            if(result.status !== 200) {
                throw result
            }
            return result.json()
        }).catch(error => {
            alert(`Error has occurred, status code: ${error.statusCode}`)
        })
    }
    // post(url: string, body?: any) {
    //     return fetch(url, {method: 'POST', body: body}).then(result => result.json())
    // }
    // delete(url: string, body?: any) {
    //     return fetch(url, {method: 'DELETE', body: body}).then(result => result.json())
    // }
    // put(url: string, body?: any) {
    //     return fetch(url, {method: 'PUT', body: body}).then(result => result.json())
    // }
}

export const initRequest = (url: string, params?: Object): string => {
    const initURL = new URL(url)

    if(params) {
        Object.keys(params).forEach(key => initURL.searchParams.append(key, params[key]))
    }

    return `${initURL.href}`
}