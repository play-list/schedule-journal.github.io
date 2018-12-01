import {observable} from "mobx";

namespace StudentGroup {
    export class Model {
        @observable
        id: number

        @observable
        name: string

        @observable
        totalCount: number

        @observable
        student: string
    }
}

export default StudentGroup
