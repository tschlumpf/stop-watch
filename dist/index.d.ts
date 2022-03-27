declare type StopwatchResult = {
    title: string;
    name: string;
    duration: {
        sec: number;
        ms: number;
    };
};
interface StopwatchCallback {
    (result: StopwatchResult): void;
}
declare type StopwatchOptions = {
    defaultCallback: StopwatchCallback;
    showErrors: boolean;
};
declare class StopWatch {
    title: string;
    defaultCallback: StopwatchCallback | undefined;
    showErrors: boolean;
    name: string;
    startTime: Date | null | undefined;
    constructor(title: string, options?: StopwatchCallback | Partial<StopwatchOptions>);
    start(name: string): void;
    stopStart(name: string, callback?: StopwatchCallback): void;
    stop(callback?: StopwatchCallback): void;
}
export { StopWatch };
//# sourceMappingURL=index.d.ts.map