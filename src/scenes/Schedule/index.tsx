import * as React from 'react';
import { History } from 'history';
import {initRequest} from "../../utils/dispatcher";
import Endpoints from "../../endpoints";
import * as moment from "moment";
import ClassRoom from "../../models/classroom";
import axios from 'axios'
import {observable} from "mobx";

interface Props {
    history: History
}

export default class ScheduleScene extends React.Component<Props, {}> {

    @observable
    private classRooms = new Map()

    componentDidMount() {
        const data = axios.get(initRequest(Endpoints.ClassRooms.all, {date: moment().format('YYYY-MM-DD')}))
            .then(response => {
                return response.data
            })
        this.classRooms.set('rooms', data)
    }

    private loadClassRooms = async (classRooms: ClassRoom.Model[]) => {
        await fetch(initRequest(Endpoints.ClassRooms.all, {date: '2018-12-01'}), {method: 'get'})
            .then(res => {
                return res.json().then(result => {
                    classRooms = result
                })
            })
        return classRooms
    }

    render() {
        // const classRooms = this.classRooms.map((room: ClassRoom.Model) => <ClassRoomItem classRooms={room}/>);
        console.log(this.classRooms.get('rooms'))
        return (
            <div>
                asdasd
            </div>
        );
    }
}