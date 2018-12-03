import { ClassRoomService } from '../index';
import Fetcher from '../../utils/dispatcher';
import Endpoints from '../../endpoints';

export default class DefaultClassRoomService implements ClassRoomService  {

    private fetcher: Fetcher

    all(body?: any, params?: Object) {
        return this.fetcher.get(Endpoints.ClassRooms.all, params)
    }
}