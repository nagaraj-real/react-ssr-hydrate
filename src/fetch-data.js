const fetchData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/10`);
  return res.json();
};

export default fetchData;
