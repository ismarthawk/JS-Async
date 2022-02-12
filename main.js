const getSomething = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4) {
        if (request.status == 200) {
          resolve(request.responseText);
        } else {
          reject(`Error in resource ${resource}`);
        }
      }
      //   console.log(request.readyState, request.status);
    });
    request.open("GET", `https://jsonplaceholder.typicode.com/${resource}/`);
    request.send();
  });
};

var arr = ["users", "posts", "comments", "albums", "phots", "todos"];

var i = 0;
console.log(arr[i]);
getSomething(arr[i])
  .then((data) => {
    console.log("Fetching ", i, "passed");
    console.log(data);
    i += 1;
    return getSomething(arr[i]);
  })
  .then((data) => {
    console.log("Fetcing", i, "is done");
    console.log(data);
    i += 1;
  })
  .catch((err) => {
    console.log("Error in doing.");
    console.log(err);
  });
