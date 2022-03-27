"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
class StopWatch {
    title;
    defaultCallback;
    showErrors;
    name;
    startTime;
    constructor(title, options) {
        if (typeof (title) !== 'string')
            throw new Error('no title was given.');
        this.title = title;
        this.name = '';
        this.showErrors = true;
        if (typeof (options) === 'object') {
            this.defaultCallback = options.defaultCallback;
            this.showErrors = options.showErrors || this.showErrors;
        }
        else if (typeof (options) === 'function') {
            this.defaultCallback = options;
        }
    }
    start(name) {
        this.name = name;
        if (this.startTime && this.showErrors) {
            throw new Error('stopwatch is started although it is already running. it will be restarted.');
        }
        this.startTime = new Date();
    }
    stopStart(name, callback) {
        if (typeof (name) !== 'string')
            throw new Error('no proper name was given.');
        this.stop(callback);
        this.start(name);
    }
    stop(callback) {
        if (!this.startTime) {
            if (this.showErrors)
                throw new Error('the stopwatch was stopped but never started.');
            return;
        }
        const duration = new Date().getTime() - this.startTime.getTime();
        this.startTime = null;
        const result = {
            title: this.title,
            name: this.name,
            duration: {
                sec: duration / 1000,
                ms: duration,
            },
        };
        if (typeof (callback) === 'function') {
            callback(result);
            return;
        }
        if (this.defaultCallback) {
            this.defaultCallback(result);
            return;
        }
        // eslint-disable-next-line no-console
        console.log(`${result.title} - '${result.name}' took ${result.duration.sec}s`);
    }
}
exports.StopWatch = StopWatch;
