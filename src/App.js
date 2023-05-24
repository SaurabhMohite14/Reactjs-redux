import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <ListDemo />
    </div>
  );
}

function ListDemo() {
  // let list = ["237", "239"];//stateless
  let [list, setList] = useState(["237"]); //statefull

  let [imageInput, setImageInput] = useState("");

  let addNewImage = () => {
    // let newList = ["238", ...list];
    let newList = [imageInput, ...list];
    setList(newList);
  };

  let inputImageHandler = (e) => {
    setImageInput(e.target.value);
  };

  return (
    <div>
      <h1>List Demo</h1>
      <div className="my-2">
        <input
          type="text"
          placeholder="Enter Image id"
          value={imageInput}
          onChange={inputImageHandler}
        />
        <input type="button" value="Add new Image" onClick={addNewImage} />
      </div>
      {list.map((item, index) => (
        <EventDemo key={index} Imageid={item} />
      ))}
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
