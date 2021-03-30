class Scheduler {
    static tasks = {};

    addTask(name, intervalMS, immediate, func) {
        if (this.checkTaskExists(name))
            throw new Error("Task is already exists");
        Scheduler.tasks[name] = { name, intervalMS, immediate, func };
        if (immediate) func();
        Scheduler.tasks[name].timer = setInterval(func, intervalMS);
    }

    removeTask(name) {
        if (this.checkTaskExists(name)) {
            clearInterval(Scheduler.tasks[name].timer);
            delete Scheduler.tasks[name].timer;
            let temp = Scheduler.tasks[name];
            delete Scheduler.tasks[name];
            return temp;
        }
    }

    checkTaskExists(name) {
        return Boolean(Scheduler.tasks[name]);
    }
}

module.exports.Scheduler = Scheduler;
