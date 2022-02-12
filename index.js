const request = new XMLHttpRequest();

const getTodos = (callback) => {
  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4) {
      if (request.status == 200) {
        data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else callback("could not fetch Data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something.
    // resolve("some data");
    reject("some err");
  });
};

getSomething()
  .then((data) => {
    console.log("Then called ,", data);
  })
  .catch((err) => {
    console.log("Error has come", err);
  });
