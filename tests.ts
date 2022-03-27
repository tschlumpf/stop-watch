/* eslint-disable no-console */
import { promisify } from 'util';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { StopWatch } from './index';

let cntPassed = 0;
let cntFailed = 0;
let test = 0;

const sleep = promisify(setTimeout);
function passed() {
  cntPassed += 1;
  return 'passed';
}

function failed() {
  cntFailed += 1;
  process.exitCode = 1;
  return 'failed';
}

function message(_test: number, result: boolean) {
  if (result == null) throw new Error('missing argument "test"');
  if (result == null) throw new Error('missing argument "result"');
  console.log(`test ${_test.toString().padStart(2, ' ')}: ${result ? passed() : failed()}`);
}

function isEqual(n: number, v: number, tolerance: number) {
  return Math.abs(v - n) < tolerance;
}

async function main() {
  test += 1;
  try {
    const stopWatch = new StopWatch('1');
    stopWatch.start('2');
    await sleep(1000);
    stopWatch.stop(() => message(test, true));
  } catch (err) {
    console.error(err);
    message(test, false);
  }

  test += 1;
  try {
    const title = 'hello';
    const name = 'timer';
    const stopWatch = new StopWatch(title);
    stopWatch.start(name);
    await sleep(1000);
    stopWatch.stop((result) => {
      if (title !== result.title) throw Error('title do not match');
      if (name !== result.name) throw Error('name do not match');
    });

    message(test, true);
  } catch (err) {
    console.error(err);
    message(test, false);
  }

  test += 1;
  try {
    const stopWatch = new StopWatch('title');
    stopWatch.start('name');
    await sleep(1000);
    stopWatch.stop((result) => {
      if (!isEqual(result.duration.sec * 1000, result.duration.ms, 5)) throw Error('ms and sec are not equal.');
    });

    message(test, true);
  } catch (err) {
    console.error(err);
    message(test, false);
  }

  test += 1;
  try {
    const timeout = 1000;
    const stopWatch = new StopWatch('title');
    stopWatch.start('name');
    await sleep(timeout);
    stopWatch.stop((result) => {
      if (!isEqual(timeout, result.duration.ms, 15)) throw Error('meassured time is not right.');
    });

    message(test, true);
  } catch (err) {
    console.error(err);
    message(test, false);
  }

  test += 1;
  try {
    const timeout = 1000;
    const stopWatch = new StopWatch('title', { showErrors: true });
    stopWatch.start('name');
    await sleep(timeout);
    stopWatch.stop((result) => {
      if (!isEqual(timeout, result.duration.ms, 15)) throw Error('meassured time is not right.');
    });

    message(test, true);
  } catch (err) {
    console.error(err);
    message(test, false);
  }

  // ######## end of tests ########
  console.log(`\nTotal: \npassed: ${cntPassed} failed: ${cntFailed}`);
}
main();
