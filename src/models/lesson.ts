import {observable} from "mobx";
import StudentGroup from "./group";
import {LESSON_TYPE} from "../enums/lessons";

namespace Lesson {
    export class Model {
        @observable
        id: number

        @observable
        name: string

        @observable
        type: LESSON_TYPE

        @observable
        desciption: string

        @observable
        beginning: string

        @observable
        end: string

        @observable
        sub_group: number

        @observable
        group: StudentGroup.Model
    }
}

export default Lesson
