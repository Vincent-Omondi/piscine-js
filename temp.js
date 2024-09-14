// First, let's define our getJSON function
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
      return jsonData; 
    } catch (error) {
      throw error;
    }
  }
  
  
//   console.log("Fetching a single post:");
//   getJSON('https://jsonplaceholder.typicode.com/posts/1')
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error.message));
  
