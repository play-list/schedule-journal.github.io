import ClassRoom from "../../models/classroom";

function ClassRoomService (url: string, body?: any): Promise<ClassRoom.Model[]> {
    return fetch(url,{method: 'GET'}).then(result => result.json())
}

export default ClassRoomService