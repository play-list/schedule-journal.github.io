import * as React from 'react';
import { History } from 'history';
import DefaultClassRoomService from '../../services/ClassRoom/default';

interface Props {
    history: History
}

export default class ScheduleScene extends React.Component<Props, {}> {

    private classRooms: any[]

    private classRoomService: DefaultClassRoomService

    async componentDidMount() {
        await this.classRoomService.all()
    }

    render() {
        // const classRooms = this.classRooms.map((room: ClassRoom.Model) => <ClassRoomItem classRooms={room}/>);
        return (
            <div>
                asdasd
            </div>
        );
    }
}