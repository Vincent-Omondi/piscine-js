async function getJSON(path, params = {}) {
  const url = new URL(path);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const jsonData = await response.json();

    if (jsonData.error) {
      throw new Error(jsonData.error);
    }

    return jsonData.data;
  } catch (error) {
    throw error;
  }
}


// Example 1: Fetching a single post
console.log("Fetching a single post:");
getJSON('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error.message));

// Example 2: Fetching posts with query parameters
console.log("\nFetching posts with query parameters:");
getJSON('https://jsonplaceholder.typicode.com/posts', { userId: 1 })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error.message));

// Example 3: Trying to fetch a non-existent resource
console.log("\nTrying to fetch a non-existent resource:");
getJSON('https://jsonplaceholder.typicode.com/nonexistent')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error.message));