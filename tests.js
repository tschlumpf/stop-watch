"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var util_1 = require("util");
var sleep = (0, util_1.promisify)(setTimeout);
var index_1 = require("./index");
var cntPassed = 0;
var cntFailed = 0;
var test = 0;
main();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var stopWatch, err_1, title_1, name_1, stopWatch, err_2, stopWatch, err_3, timeout_1, stopWatch, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    test++;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    stopWatch = new index_1.StopWatch("1");
                    stopWatch.start("2");
                    return [4 /*yield*/, sleep(1000)];
                case 2:
                    _a.sent();
                    stopWatch.stop(function () { return message(test, true); });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    message(test, false);
                    return [3 /*break*/, 4];
                case 4:
                    test++;
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    title_1 = "hello";
                    name_1 = "timer";
                    stopWatch = new index_1.StopWatch(title_1);
                    stopWatch.start(name_1);
                    return [4 /*yield*/, sleep(1000)];
                case 6:
                    _a.sent();
                    stopWatch.stop(function (result) {
                        if (title_1 !== result.title)
                            throw Error("title do not match");
                        if (name_1 !== result.name)
                            throw Error("name do not match");
                    });
                    message(test, true);
                    return [3 /*break*/, 8];
                case 7:
                    err_2 = _a.sent();
                    console.error(err_2);
                    message(test, false);
                    return [3 /*break*/, 8];
                case 8:
                    test++;
                    _a.label = 9;
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    stopWatch = new index_1.StopWatch("title");
                    stopWatch.start("name");
                    return [4 /*yield*/, sleep(1000)];
                case 10:
                    _a.sent();
                    stopWatch.stop(function (result) {
                        if (!isEqual(result.duration.sec * 1000, result.duration.ms, 5))
                            throw Error("ms and sec are not equal.");
                    });
                    message(test, true);
                    return [3 /*break*/, 12];
                case 11:
                    err_3 = _a.sent();
                    console.error(err_3);
                    message(test, false);
                    return [3 /*break*/, 12];
                case 12:
                    test++;
                    _a.label = 13;
                case 13:
                    _a.trys.push([13, 15, , 16]);
                    timeout_1 = 1000;
                    stopWatch = new index_1.StopWatch("title");
                    stopWatch.start("name");
                    return [4 /*yield*/, sleep(timeout_1)];
                case 14:
                    _a.sent();
                    stopWatch.stop(function (result) {
                        if (!isEqual(timeout_1, result.duration.ms, 15))
                            throw Error("meassured time is not right.");
                    });
                    message(test, true);
                    return [3 /*break*/, 16];
                case 15:
                    err_4 = _a.sent();
                    console.error(err_4);
                    message(test, false);
                    return [3 /*break*/, 16];
                case 16:
                    // ######## end of tests ########
                    console.log("\nTotal: \npassed: ".concat(cntPassed, " failed: ").concat(cntFailed));
                    return [2 /*return*/];
            }
        });
    });
}
function passed() {
    cntPassed += 1;
    return "passed";
}
function failed() {
    cntFailed += 1;
    process.exitCode = 1;
    return "failed";
}
function message(test, result) {
    if (result == null)
        throw new Error("missing argument 'test'");
    if (result == null)
        throw new Error("missing argument 'result'");
    console.log("test ".concat(test.toString().padStart(2, " "), ": ").concat(result ? passed() : failed()));
}
function isEqual(n, v, tolerance) {
    return Math.abs(v - n) < tolerance;
}
