import * as tslib_1 from "tslib";
import { observable } from "mobx";
var StudentGroup;
(function (StudentGroup) {
    var Model = /** @class */ (function () {
        function Model() {
        }
        tslib_1.__decorate([
            observable
        ], Model.prototype, "id", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "name", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "totalCount", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "student", void 0);
        return Model;
    }());
    StudentGroup.Model = Model;
})(StudentGroup || (StudentGroup = {}));
export default StudentGroup;
//# sourceMappingURL=group.js.map