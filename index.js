"use strict";

class StopWatch {
    constructor(title, options) {
        if (typeof (title) !== "string") throw new Error("no title was given.");
        this.title = title;

        if (typeof (options) === "object") {
            this.defaultCallback = options.defaultCallback;
            this.showErrors = options.showErrors || true;
        } else if (typeof (options) === "function") {
            this.defaultCallback = options;
        }
    }

    start(name) {
        this.name = name;

        if (this.startTime && this.showErrors) {
            console.error("stopwatch is started although it is already running. it will be restarted.");
        }
        this.startTime = new Date();
    }

    stopStart(name, callback) {
        if (typeof (name) !== "string") throw new Error("no proper name was given.");

        this.stop(callback, false);
        this.start(name, false);
    }

    stop(callback) {
        if (!this.startTime) {
            if (this.showErrors) console.error("the stopwatch was stopped but never started.");
            return;
        }

        const duration = new Date() - this.startTime;
        this.startTime = null;

        const result = {
            title: this.title,
            name: this.name,
            duration: {
                sec: duration / 1000,
                ms: duration,
            },
        };

        if (typeof (callback) === "function") {
            callback(result);
            return;
        }

        if (this.defaultCallback) {
            this.defaultCallback(result);
            return;
        }
        console.log(`${this.title} - "${this.name}" took ${duration.sec}s`);
    }
}

module.exports = StopWatch;
