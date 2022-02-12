const getTodos = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todo/`);
  if (response.status != 200) {
    throw new Error("Invalid fethc endpoint/API");
  }
  const data = await response.json();
  //   console.log(data);
  return data;
};

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
