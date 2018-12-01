import * as tslib_1 from "tslib";
import { observable } from "mobx";
var Lesson;
(function (Lesson) {
    var Model = /** @class */ (function () {
        function Model() {
        }
        tslib_1.__decorate([
            observable
        ], Model.prototype, "id", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "title", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "type", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "description", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "beginning", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "end", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "studentGroups", void 0);
        return Model;
    }());
    Lesson.Model = Model;
})(Lesson || (Lesson = {}));
export default Lesson;
//# sourceMappingURL=lesson.js.map