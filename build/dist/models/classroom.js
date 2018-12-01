import * as tslib_1 from "tslib";
import { observable } from "mobx";
var ClassRoom;
(function (ClassRoom) {
    var Model = /** @class */ (function () {
        function Model() {
        }
        tslib_1.__decorate([
            observable
        ], Model.prototype, "name", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "lessons", void 0);
        return Model;
    }());
    ClassRoom.Model = Model;
})(ClassRoom || (ClassRoom = {}));
export default ClassRoom;
//# sourceMappingURL=classroom.js.map