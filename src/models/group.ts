import {observable} from "mobx";

namespace StudentGroup {
    export class Model {
        @observable
        id: number

        @observable
        name: string
    }
}

export default StudentGroup
