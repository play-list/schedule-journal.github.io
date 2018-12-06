import * as React from 'react'
import Lesson from "../../models/lesson";

import './index.scss'

interface Props {
    lesson: Lesson.Model
}

export default class LessonCard extends React.Component<Props, {}> {
    render() {
        const {lesson} = this.props

        return(
            <div className='lesson_item'>
                <div className='lesson_info'>
                    <div className='group_name'>
                        {lesson.group.name}
                    </div>
                    <div className='lesson_duration'>
                        {lesson.beginning} - {lesson.end}
                    </div>

                </div>
                <div className='lesson_name'>
                    {lesson.name}
                </div>
                <div className='lesson_description'>
                    {lesson.desciption}
                </div>
            </div>
        )
    }
}