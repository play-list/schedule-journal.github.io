import * as React from "react";
import ClassRoom from "../../models/classroom";

interface Props {
    classRooms: ClassRoom.Model
}

class ClassRoomItem extends React.Component<Props, {}> {
    render() {
        const {classRooms} = this.props

        return (
            <div>
                {classRooms.name}
            </div>
        )
    }
}

export default ClassRoomItem