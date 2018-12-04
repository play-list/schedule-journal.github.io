import * as React from "react";
import ClassRoom from "../../models/classroom";

import './index.scss'
import { observer } from 'mobx-react';

interface Props {
    classRooms: ClassRoom.Model
}

@observer
class ClassRoomItem extends React.Component<Props, {}> {
    render() {
        const {classRooms} = this.props

        return (
            <div className='class_room_name'>
                {classRooms.name}
            </div>
        )
    }
}

export default ClassRoomItem