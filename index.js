"use strict";
exports.__esModule = true;
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch(title, options) {
        if (typeof (title) !== "string")
            throw new Error("no title was given.");
        this.title = title;
        this.name = "";
        this.showErrors = true;
        if (typeof (options) === "object") {
            this.defaultCallback = options.defaultCallback;
            this.showErrors = options.showErrors || this.showErrors;
        }
        else if (typeof (options) === "function") {
            this.defaultCallback = options;
        }
    }
    StopWatch.prototype.start = function (name) {
        this.name = name;
        if (this.startTime && this.showErrors) {
            console.error("stopwatch is started although it is already running. it will be restarted.");
        }
        this.startTime = new Date();
    };
    StopWatch.prototype.stopStart = function (name, callback) {
        if (typeof (name) !== "string")
            throw new Error("no proper name was given.");
        this.stop(callback);
        this.start(name);
    };
    StopWatch.prototype.stop = function (callback) {
        if (!this.startTime) {
            if (this.showErrors)
                console.error("the stopwatch was stopped but never started.");
            return;
        }
        var duration = new Date().getTime() - this.startTime.getTime();
        this.startTime = null;
        var result = {
            title: this.title,
            name: this.name,
            duration: {
                sec: duration / 1000,
                ms: duration
            }
        };
        if (typeof (callback) === "function") {
            callback(result);
            return;
        }
        if (this.defaultCallback) {
            this.defaultCallback(result);
            return;
        }
        console.log("".concat(result.title, " - \"").concat(result.name, "\" took ").concat(result.duration.sec, "s"));
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
