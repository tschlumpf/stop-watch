export = StopWatch;
declare class StopWatch {
    constructor(title: string, options: Object|Function);
    title: string;
    defaultCallback: Function;
    showErrors: boolean;
    start(name: string): void;
    name: string;
    startTime: Date;
    stopStart(name: string, callback: Function): void;
    stop(callback: string): void;
}
//# sourceMappingURL=index.d.ts.map