// fetch is a promise.
fetch(`https://jsonplaceholder.typicode.com/todos/`)
  .then((response) => {
    console.log("The data is ", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error in fetching", err);
  });
