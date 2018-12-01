import {observable} from "mobx";

namespace Student {
    export class Model {
        @observable
        id: number

        @observable
        fullName: string
    }
}