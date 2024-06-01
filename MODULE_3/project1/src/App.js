import logo from "./logo.svg";
import "./App.css";
import Listview from "./Components/Listview";
import Increment_decrement from "./Components/Increment_decrement";

function App() {
  const arr = [
    "Use Array.map",
    "Not a for loop",
    "Give each item a unique key",
    "Avoid using array index as the key",
  ];
  return (
    <div className="App">
     {/* <Increment_decrement/> */}
    
      <Listview    myarray={arr}/>
    </div>
  );
}

export default App;
