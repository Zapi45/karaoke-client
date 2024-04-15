import Button from "../components/buttons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ALLO</h1>
      <Button text={"golem"} color={"green"} functions={() => alert("test")} />
    </div>
  );
}

export default App;
