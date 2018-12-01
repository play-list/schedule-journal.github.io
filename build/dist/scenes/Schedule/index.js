import * as tslib_1 from "tslib";
import * as React from "react";
import ClassRoomItem from "../../components/ClassRooms";
import Endpoints from "../../endpoints";
var ScheduleScene = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleScene, _super);
    function ScheduleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fetcher = function (url, body) {
            return fetch(url, { method: 'GET' }).then(function (result) { return result.json(); });
        };
        return _this;
    }
    ScheduleScene.prototype.componentDidMount = function () {
        this.classRooms = this.fetcher(Endpoints.ClassRooms.all);
    };
    ScheduleScene.prototype.render = function () {
        var classRooms = this.classRooms.map(function (room) { return React.createElement(ClassRoomItem, { classRooms: room }); });
        console.log(classRooms);
        return (React.createElement("div", null, classRooms));
    };
    return ScheduleScene;
}(React.Component));
export default ScheduleScene;
//# sourceMappingURL=index.js.map