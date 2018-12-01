function ClassRoomService(url, body) {
    return fetch(url, { method: 'GET' }).then(function (result) { return result.json(); });
}
export default ClassRoomService;
//# sourceMappingURL=default.js.map