module.exports.platformMapping = function (arr) {
    let result = {};
    arr.forEach((obj) => {
        if (!result[obj.platform]) {
            result[obj.platform] = [];
        }
        result[obj.platform].push(obj);
    });
    return result;
};
