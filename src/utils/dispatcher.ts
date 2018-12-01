
export default interface BaseService {
    get(url: string, body?: any): Promise<void>
    post(url: string, body?: any): Promise<void>
    put(url: string, body?: any): Promise<void>
    delete(url: string, body?: any): Promise<void>
}

export class Fetcher {
    get(url: string, body?: any) {
        fetch(url, {method: 'GET', body: body}).then(result => result.json())
    }
    post(url: string, body?: any) {
        return fetch(url, {method: 'POST', body: body})
    }
    delete(url: string, body?: any) {
        return fetch(url, {method: 'POST', body: body})
    }
    put(url: string, body?: any) {
        return fetch(url, {method: 'POST', body: body})
    }
}