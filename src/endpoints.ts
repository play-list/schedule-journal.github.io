const baseURL = 'http://ejj.herokuapp.com'

const origin = (path: string) => `${baseURL}${path}`

export default class Endpoints {
    static ClassRooms = class {
        static all = origin('/schedule?date=2018-12-01')
    }
}