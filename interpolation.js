function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    const deltaValue = (end - start) / step;
    const timeInterval = duration / step;

    let currentValue = start;
    let currentStep = 0;

    const interpolationTimer = setInterval(() => {
        if (currentStep < step) {
            const currentTime = timeInterval * (currentStep + 1);
            callback([currentValue, currentTime]);
            
            currentValue += deltaValue;
            currentStep++;
        } else {
            clearInterval(interpolationTimer);
        }
    }, timeInterval);
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