import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      {/**EventDemo is name of function , attribute are parameter */}
      <EventDemo Imageid="237" />
      <hr />
      <EventDemo Imageid="239" />
    </div>
  );
}

function EventDemo({ Imageid }) {
  let [counter, setCounter] = useState(100);

  //statless function
  let imageUrl = `http://picsum.photos/id/${Imageid}/200/200`;

  //Member func
  let likeMe = () => {
    counter += 1;

    //Trigger the dom Operation:: Asking the REACT to perform DOM

    setCounter(counter);
  };

  return (
    <div>
      <img src={imageUrl} alt="" />
      <h1>Like {counter}</h1>
      <input type="button" value="Like Me" onClick={likeMe} />
    </div>
  );
}

export default App;
