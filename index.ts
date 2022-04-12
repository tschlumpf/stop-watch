export type StopwatchResult = {
  title: string,
  name: string,
  duration: {
    sec: number,
    ms: number,
    ns: number,
  },
}

export interface StopwatchCallback {
  (result: StopwatchResult): void;
}

export type StopwatchOptions = {
  defaultCallback: StopwatchCallback,
  showErrors: boolean
}

class StopWatch {
  title: string;

  defaultCallback: StopwatchCallback | undefined;

  showErrors: boolean;

  name: string;

  startTime: bigint | null | undefined;

  constructor(title: string, options?: StopwatchCallback | Partial<StopwatchOptions>) {
    if (typeof (title) !== 'string') throw new Error('no title was given.');
    this.title = title;
    this.name = '';
    this.showErrors = true;

    if (typeof (options) === 'object') {
      this.defaultCallback = options.defaultCallback;
      this.showErrors = options.showErrors || this.showErrors;
    } else if (typeof (options) === 'function') {
      this.defaultCallback = options;
    }
  }

  start(name: string) {
    this.name = name;

    if (this.startTime && this.showErrors) {
      throw new Error('stopwatch is started although it is already running. it will be restarted.');
    }
    // this.startTime = new Date();
    this.startTime = process.hrtime.bigint();
  }

  stopStart(name: string, callback?: StopwatchCallback) {
    if (typeof (name) !== 'string') throw new Error('no proper name was given.');

    this.stop(callback);
    this.start(name);
  }

  stop(callback?: StopwatchCallback) {
    if (!this.startTime) {
      if (this.showErrors) throw new Error('the stopwatch was stopped but never started.');
      return;
    }

    const duration = process.hrtime.bigint() - this.startTime;
    this.startTime = null;

    const result: StopwatchResult = {
      title: this.title,
      name: this.name,
      duration: {
        sec: Number(duration / 1000_000_000n),
        ms: Number(duration / 1000_000n),
        ns: Number(duration),
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

export default StopWatch;
