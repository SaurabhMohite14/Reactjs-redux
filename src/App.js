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
  let [counter, setCounter] = useState(100);

  //Member func
  let likeMe = () => {
    counter += 1;

    //Trigger the dom Operation:: Asking the REACT to perform DOM

    setCounter(counter);
  };

  return (
    <div>
      <img src="http://picsum.photos/id/237/300" alt="" />
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
