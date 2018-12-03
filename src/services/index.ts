import ClassRoom from '../models/classroom';

export interface ClassRoomService {
    all(url: string, body?: any, params?: any): Promise<ClassRoom.Model[]>
}