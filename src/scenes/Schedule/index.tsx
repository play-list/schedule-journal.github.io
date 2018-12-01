import * as React from "react";
import {History} from "history";
import ClassRoom from "../../models/classroom";
import ClassRoomItem from "../../components/ClassRooms";
import ClassRoomService from '../../services/ClassRoom/default'
import Endpoints from "../../endpoints";

interface Props {
    history: History
}

export default class ScheduleScene extends React.Component<Props, {}> {

    private classRooms: ClassRoom.Model[]

    componentDidMount() {
        this.classRooms = this.fetcher(Endpoints.ClassRooms.all)
    }

    render() {
        const classRooms = this.classRooms.map((room: ClassRoom.Model) => <ClassRoomItem classRooms={room}/>)
        console.log(classRooms)
        return (
            <div>
                {classRooms}
            </div>
        )
    }

    private fetcher = (url: string, body?: any): Promise<ClassRoom.Model[]> => {
        return fetch(url,{method: 'GET'}).then(result => result.json())
    }
}