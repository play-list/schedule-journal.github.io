var Fetcher = /** @class */ (function () {
    function Fetcher() {
    }
    Fetcher.prototype.get = function (url, body) {
        fetch(url, { method: 'GET', body: body }).then(function (result) { return result.json(); });
    };
    Fetcher.prototype.post = function (url, body) {
        return fetch(url, { method: 'POST', body: body });
    };
    Fetcher.prototype.delete = function (url, body) {
        return fetch(url, { method: 'POST', body: body });
    };
    Fetcher.prototype.put = function (url, body) {
        return fetch(url, { method: 'POST', body: body });
    };
    return Fetcher;
}());
export { Fetcher };
//# sourceMappingURL=dispatcher.js.map