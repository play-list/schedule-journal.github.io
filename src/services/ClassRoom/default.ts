import { ClassRoomService } from '../index';
import Fetcher from '../../utils/dispatcher';
import Endpoints from '../../endpoints';

export default class DefaultClassRoomService implements ClassRoomService  {

    private fetcher: Fetcher

    async all(body?: any, params?: Object) {
        console.log(this.fetcher.get(Endpoints.ClassRooms.all))
        return await this.fetcher.get(Endpoints.ClassRooms.all)
    }
}