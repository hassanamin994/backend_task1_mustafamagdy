module.exports.sumAmountInLocation = (arr) => {
    const reducer = (acc, cur) => {
        if (!cur.location) return acc;
        acc[cur.location] =
            (acc[cur.location] || 0) +
            cur.user.campaignActiveCreators_aggregate.aggregate.count;
        return acc;
    };
    return arr.reduce(reducer, {});
};
