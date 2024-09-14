function interpolation({ step, start, end, callback, duration }) {
    const stepSize = (end - start) / step;
    const timeInterval = duration / step;
  
    let completedSteps = 0;
  
    function executeStep() {
      if (completedSteps < step) {
        const currentPoint = start + completedSteps * stepSize;
        const currentTime = completedSteps * timeInterval;
  
        callback([currentPoint, currentTime]);
        completedSteps++;
  
        if (completedSteps < step) {
          setTimeout(executeStep, timeInterval);
        }
      }
    }
  
    executeStep();
}

// console.log("Starting interpolation...");

// interpolation({
//   step: 5,
//   start: 0,
//   end: 4,
//   duration: 50,
//   callback: ([x, y]) => {
//     console.log(`Point: ${x.toFixed(2)}, Time: ${y.toFixed(2)}ms`);
//   }
// });

// console.log("Interpolation function called. Waiting for results...");