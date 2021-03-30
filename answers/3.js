module.exports.maxAmountInLocation = (arr) => {
    let result = {};
    for (obj of arr) {
        if (!obj.location) continue;
        if (!result[obj.location]) {
            result[obj.location] =
                obj.user.campaignActiveCreators_aggregate.aggregate.count;
            continue;
        }
        if (
            obj.user.campaignActiveCreators_aggregate.aggregate.count >
            result[obj.location]
        ) {
            result[obj.location] =
                obj.user.campaignActiveCreators_aggregate.aggregate.count;
        }
    }
    return result;
};
