module.exports.maxAmount = (arr) => {
    let maxObj = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].amount > maxObj.amount) {
            maxObj = arr[i];
        }
    }
    return maxObj;
};
