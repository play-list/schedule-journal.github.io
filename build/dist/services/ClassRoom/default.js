import { action } from 'mobx';
import { initRequest } from '../../utils/dispatcher';
var FetchClassRoom = function (url, params) { return action(function () {
    fetch(initRequest(url, params), { method: 'get' })
        .then(function (res) {
        res.json()
            .then(function (response) {
            return response;
        });
    });
}); };
export default FetchClassRoom;
//# sourceMappingURL=default.js.map