import {observable} from "mobx";
import Lesson from "./lesson";

namespace ClassRoom {
    export class Model {
        @observable
        name: string

        @observable
        lessons: Lesson.Model[]
    }

}

export default ClassRoom