function interpolation({step, start, end, callback, duration}) {
    const stepsize = (end - start) / step;
    const timeInterval = duration/ step;

    for (let i = 0; i < step; i++){
        const currentPoint = start + i * stepsize;
        const currentTime = i * timeInterval;

        setTimeout(() => {
            callback([currentPoint, currentTime]);
        }, currentTime);
    }
}

// console.log("Starting interpolation...");

// interpolation({
//   step: 5,
//   start: 0,
//   end: 1,
//   duration: 10000, // 10 seconds
//   callback: ([x, y]) => {
//     console.log(`Point: ${x.toFixed(2)}, Time: ${y.toFixed(2)}ms`);
//   }
// });

// console.log("Interpolation function called. Waiting for results...");