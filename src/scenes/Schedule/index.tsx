import * as React from 'react';
import { History } from 'history';
import {initRequest} from "../../utils/dispatcher";
import Endpoints from "../../endpoints";
import { observable } from "mobx";
import { observer } from 'mobx-react';
import ClassRoom from '../../models/classroom';
import ClassRoomItem from '../../components/ClassRooms';

interface Props {
    history: History
}

@observer
export default class ScheduleScene extends React.Component<Props, {}> {

    @observable
    private classRooms: ClassRoom.Model[] = []

    componentDidMount() {
        this.loadClassRooms()
    }

    render() {
        return (
            <div>
                <div className='class_room'>
                    {this.classRooms.map((room: ClassRoom.Model, index: number) =>
                        <ClassRoomItem
                            key={index}
                            classRooms={room}
                        />)}
                </div>
            </div>
        );
    }

    private loadClassRooms = () => {
        fetch(initRequest(Endpoints.ClassRooms.all, {date: '2018-12-01'}), {method: 'get'})
            .then(res => {
                res.json()
                    .then((result: ClassRoom.Wrapper) => {
                        this.classRooms = result.classRooms
                    })
            })
    }

}