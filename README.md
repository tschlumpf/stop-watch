# stop-watch
simple tool to measure code runtime.

## Install
```sh
npm install "https://github.com/tschlumpf/stop-watch.git#main"
```
## Usage
```javascript
const StopWatch = require("stop-watch");

const stopWatch = new StopWatch("hello");
stopWatch.start("function 1");
// do stuff
stopWatch.stopStart("function 2"); // output: hello - "function 1" took 1.234s
// do more stuff
stopWatch.stop() // output: hello - "function 2" took 1.234s
```

To modify the output the constructor, `.stopStart()` and `.stop()` takes a callback as an argument:
```javascript
const stopWatch = new StopWatch("hello", (result) => log(`${result.title} ${result.name} took ${result.duration.sec}s`));
// or
stopWatch.stopStart((result) => log(`${result.title} ${result.name} took ${result.duration.sec}s`));
//or
stopWatch.stop((result) => log(`${result.title} ${result.name} took ${result.duration.sec}s`));
```
The callback given to the constructor will allways be used if none other was given.

Result:
```javascript
{
  title,
  name,
  duration: {
    sec, //duration in seconds
    ms, //duration in milliseconds
    ns, //duration in nanoseconds
  }
}
```

Starting an already started time or sopping a stopped timer will print an error to the console:
```javascript
stopWatch.start("function");
stopWatch.start(); // output: stopwatch is started although it is already running. it will be restarted.

stopWatch.stop(); // output: output: hello - "function" took 2.345s
stopWatch.stop(); // output: the stopwatch was stopped but never started.
```
The messages can be turned off by passing an `option`s object to the constructor:
```javascript
const options = {
    defaultCallback: (result) => log(`${result.title} ${result.name} took ${result.duration.sec}s`),
    showErrors: false,
}
const stopWatch = new StopWatch("title", options);
```

