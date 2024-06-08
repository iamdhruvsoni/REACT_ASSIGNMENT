import logo from "./logo.svg";
import "./App.css";
import Increment_Decrement from "./Components/Increment_Decrement";
import Listview from "./Components/Listview";
import LifecycleClass from "./Components/LifecycleClass";
import LifecycleFunction from "./Components/LifecycleFunction";

function App() {
  const arr = [
    "Use Array.map",
    "Not a for loop",
    "Give each item a unique key",
    "Avoid using array index as the key",
  ];
  return (
    <div className="App">
      {/* <Increment_Decrement /> */}
    
      {/* <Listview    myarray={arr}/> */}
      <LifecycleClass/>
      {/* <LifecycleFunction/> */}

    </div>
  );
}

export default App;
