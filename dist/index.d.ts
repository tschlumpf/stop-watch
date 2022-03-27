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
declare type Options = {
    defaultCallback: Callback;
    showErrors: boolean;
};
declare class StopWatch {
    title: string;
    defaultCallback: Callback | undefined;
    showErrors: boolean;
    name: string;
    startTime: Date | null | undefined;
    constructor(title: string, options?: Callback | Partial<Options>);
    start(name: string): void;
    stopStart(name: string, callback?: Callback): void;
    stop(callback?: Callback): void;
}
export { StopWatch };
//# sourceMappingURL=index.d.ts.map