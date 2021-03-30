// 1
const data = require("./q1.json");
const { platformMapping } = require("./answers/1");
let mapped = platformMapping(data);
let mappedCopy = {};
for (prop in mapped) {
    mappedCopy[prop] = mapped[prop].length;
}
// console.log(mapped);

// 2
const { maxAmount } = require("./answers/2");
// console.log(maxAmount(data));

// 3
const q3 = require("./q3.json");
const { maxAmountInLocation } = require("./answers/3");
// console.log(maxAmountInLocation(q3));

// 4
const { sumAmountInLocation } = require("./answers/4");
// console.log(sumAmountInLocation(q3));

// 5
const { Scheduler } = require("./answers/scheduler");
const scd = new Scheduler();
scd.addTask("task 1", 2000, false, () => {
    console.log("hello task 1 every 2s");
    scd.removeTask("task 2");
});
scd.addTask("task 2", 1000, true, () => {
    console.log("hello task 2 every 1s or immediate");
});
console.log("is task 1 exists: ", scd.checkTaskExists("task 1"));
