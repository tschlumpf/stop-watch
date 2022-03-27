declare type Options = Function | {
    defaultCallback: Function;
    showErrors: boolean;
};
declare type Result = {
    title: string;
    name: string;
    duration: {
        sec: number;
        ms: number;
    };
};
interface Callback {
    (result: Result): void;
}
declare class StopWatch {
    title: string;
    defaultCallback: Function | undefined;
    showErrors: boolean;
    name: string;
    startTime: Date | null | undefined;
    constructor(title: string, options?: Options);
    start(name: string): void;
    stopStart(name: string, callback?: Callback): void;
    stop(callback?: Callback): void;
}
export { StopWatch };
//# sourceMappingURL=index.d.ts.map