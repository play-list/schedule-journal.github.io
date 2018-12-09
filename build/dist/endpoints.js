var baseURL = 'http://ejj.herokuapp.com';
var origin = function (path) { return "" + baseURL + path; };
var Endpoints = /** @class */ (function () {
    function Endpoints() {
    }
    var _a;
    Endpoints.ClassRooms = (_a = /** @class */ (function () {
            function class_1() {
            }
            return class_1;
        }()),
        _a.all = origin('/schedule'),
        _a);
    return Endpoints;
}());
export default Endpoints;
//# sourceMappingURL=endpoints.js.map