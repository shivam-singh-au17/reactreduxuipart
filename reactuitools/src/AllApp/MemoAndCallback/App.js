import AddTask from "./Components/MemoAndCallback/AddTask";
// import { MemUser } from "./Components/MemoAndCallback/User";

function fact(n) {
  if (n <= 1) {
    return 1;
  }
  return fact(n - 1) + fact(n-2);
}

function App() {

  const factorial = fact(28)
  return (
    <div>
      {/* <MemUser name="Shivam Singh" age="23" /> */}
      {/* <MemUser name="Saurabh Singh" age="21" /> */}
      <AddTask />
      <h1>factorial is {factorial }</h1>
    </div>
  );
}

export default App;
