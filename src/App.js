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
  // e very used=ful when working input element
  let likeMe1 = (e) => {
    console.log(e);
    console.log(e.target);
  };

  // custom param
  let likeMe2 = (p1, p2) => {
    console.log(p1);
  };

  let likeMe3 = (e, p1) => {
    console.log(p1);
    console.log(e);
  };

  return (
    <div>
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
      <input type="button" value="Like Me1" onClick={likeMe1} />
      {/**For usr Defined param */}

      <input
        type="button"
        value="Like Me2"
        onClick={() => likeMe2("data", 100)}
      />

      {/**Default param + User Defined param */}

      <input
        type="button"
        value="Like Me 3"
        onClick={(e) => likeMe3(e, "data")}
      />
    </div>
  );
}

export default App;
