// // fake `getJSON` function
// let getJSON = async (url) => url

// queryServers function
async function queryServers(serverName, q) {
    const mainUrl = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;

    // Race between the main and backup server to get the fastest response
    return Promise.race([getJSON(mainUrl), getJSON(backupUrl)]);
}

// Timeout function to reject after 80ms
function withTimeout(promise, ms) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => reject(new Error('timeout')), ms);
        promise
            .then((res) => {
                clearTimeout(timeoutId);
                resolve(res);
            })
            .catch((err) => {
                clearTimeout(timeoutId);
                reject(err);
            });
    });
}

// gougleSearch function
async function gougleSearch(q) {
    try {
        // Set up the three server queries
        const webQuery = queryServers('web', q);
        const imageQuery = queryServers('image', q);
        const videoQuery = queryServers('video', q);

        // Run all queries concurrently with a timeout of 80ms
        const results = await Promise.race([
            Promise.all([webQuery, imageQuery, videoQuery]),
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 80))
        ]);

        // Return the results in an object with server names as keys
        return {
            web: results[0],
            image: results[1],
            video: results[2],
        };
    } catch (error) {
        // Return error if timeout occurs
        return error;
    }
}


// gougleSearch('hello+world')
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

