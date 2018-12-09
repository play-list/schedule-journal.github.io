export var initRequest = function (url, params) {
    var initURL = new URL(url);
    if (params) {
        Object.keys(params).forEach(function (key) { return initURL.searchParams.append(key, params[key]); });
    }
    return "" + initURL.href;
};
//# sourceMappingURL=dispatcher.js.map