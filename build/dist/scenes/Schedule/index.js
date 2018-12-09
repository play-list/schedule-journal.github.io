import * as tslib_1 from "tslib";
import * as React from 'react';
import { initRequest } from "../../utils/dispatcher";
import Endpoints from "../../endpoints";
import { observable } from "mobx";
import { observer } from 'mobx-react';
import ClassRoomItem from '../../components/ClassRooms';
import './index.scss';
import ScheduleTimeline from "../../components/Schedule/Timeline";
import ScheduleHeader from "../../components/Schedule/Header";
var ScheduleScene = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleScene, _super);
    function ScheduleScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classRooms = [];
        _this.loadClassRooms = function () {
            fetch(initRequest(Endpoints.ClassRooms.all, { date: '2018-12-01' }), { method: 'get' })
                .then(function (res) {
                res.json()
                    .then(function (result) {
                    _this.classRooms = result.classRooms;
                });
            });
        };
        return _this;
    }
    ScheduleScene.prototype.componentDidMount = function () {
        this.loadClassRooms();
    };
    ScheduleScene.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(ScheduleHeader, null),
            React.createElement(ScheduleTimeline, null),
            React.createElement("div", { className: 'class_room' }, this.classRooms.map(function (room, index) {
                return React.createElement(ClassRoomItem, { key: index, classRooms: room });
            }))));
    };
    tslib_1.__decorate([
        observable
    ], ScheduleScene.prototype, "classRooms", void 0);
    ScheduleScene = tslib_1.__decorate([
        observer
    ], ScheduleScene);
    return ScheduleScene;
}(React.Component));
export default ScheduleScene;
//# sourceMappingURL=index.js.map