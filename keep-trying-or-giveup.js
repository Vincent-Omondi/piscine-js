function retry(count, callback) {
  return async function(...args) {
    let attempts = 0;
    while (true) {
      try {
        return await callback(...args);
      } catch (error) {
        attempts++;
        if (attempts > count) {
          throw new Error('Max retries reached');
        }
      }
    }
  };
}

function timeout(delay, callback) {
  return async function(...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), delay);
    });

    const callbackPromise = callback(...args);

    return Promise.race([callbackPromise, timeoutPromise]);
  };
}

// Example usage of retry
// const unreliableFunction = async () => {
//   const random = Math.random();
//   if (random < 0.8) {
//     throw new Error('Random failure');
//   }
//   return 'Success!';
// };

// const retryFunction = retry(3, unreliableFunction);

// retryFunction()
//   .then(result => console.log('Retry result:', result))
//   .catch(error => console.error('Retry error:', error.message));

// // Example usage of timeout
// const slowFunction = async () => {
//   await new Promise(resolve => setTimeout(resolve, 2000));
//   return 'Slow operation complete';
// };

// const timeoutFunction = timeout(1500, slowFunction);

// timeoutFunction()
//   .then(result => console.log('Timeout result:', result))
//   .catch(error => console.error('Timeout error:', error.message));

