async function getJSON(path = '', params = {}) {
    const queryString = new URLSearchParams(params).toString().replace(/%20/g, '+');
    const url = `${path}?${queryString}`;
    
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const res = await response.json();

    if (res.error) {
        throw new Error(res.error);
    }

    return res.data;
}
