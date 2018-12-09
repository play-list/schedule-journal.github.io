import * as tslib_1 from "tslib";
import * as React from "react";
import './index.scss';
import { observer } from 'mobx-react';
import LessonCard from "../Lessons";
var ClassRoomItem = /** @class */ (function (_super) {
    tslib_1.__extends(ClassRoomItem, _super);
    function ClassRoomItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassRoomItem.prototype.render = function () {
        var classRooms = this.props.classRooms;
        return (React.createElement("div", { className: 'class_room_column' },
            React.createElement("div", { className: 'name' }, classRooms.name),
            React.createElement("div", { className: 'lesson_card' }, classRooms.lessons.map(function (lesson, index) {
                return React.createElement(LessonCard, { key: index, lesson: lesson });
            }))));
    };
    ClassRoomItem = tslib_1.__decorate([
        observer
    ], ClassRoomItem);
    return ClassRoomItem;
}(React.Component));
export default ClassRoomItem;
//# sourceMappingURL=index.js.map