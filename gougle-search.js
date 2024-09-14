// // fake `getJSON` function
// let getJSON = async (url) => url

// queryServers function
async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;
    
    return Promise.race([getJSON(url), getJSON(backupUrl)]);
}

async function gougleSearch(q) {
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), 80)
    );

    const webPromise = queryServers('web', q);
    const imagePromise = queryServers('image', q);
    const videoPromise = queryServers('video', q);

    try {
        const [web, image, video] = await Promise.race([
            timeoutPromise, 
            Promise.all([webPromise, imagePromise, videoPromise])
        ]);
        
        return { web, image, video };
    } catch (error) {
        throw error;
    }
}



// gougleSearch('hello+world')
//   .then(result => console.log(result))
//   .catch(error => console.error(error));

