import * as tslib_1 from "tslib";
import * as React from "react";
var ClassRoomItem = /** @class */ (function (_super) {
    tslib_1.__extends(ClassRoomItem, _super);
    function ClassRoomItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassRoomItem.prototype.render = function () {
        var classRooms = this.props.classRooms;
        return (React.createElement("div", null, classRooms.name));
    };
    return ClassRoomItem;
}(React.Component));
export default ClassRoomItem;
//# sourceMappingURL=index.js.map