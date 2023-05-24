import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <EventDemo />
    </div>
  );
}

function EventDemo() {
  let [counter] = useState(100);

  //Member func
  let likeMe = () => {
    alert();
  };

  //default covention of the param name is :: e,e1
  let likeMe1 = (e) => {
    console.log(e);
    alert();
  };
  return (
    <div>
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
      <input type="button" value="Like Me" onClick={likeMe1} />
    </div>
  );
}

export default App;
