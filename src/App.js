import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Smiling Happy Face",
  "😅": "Discomfort,after exercise,puzzled",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winky Face",
  "😊": "Genuine Happiness with positive feelings",
  "😍": "Enthusiastic feeling of Love",
  "🤩": "Amazing,Exciting",
  "😘": "Love and Affection",
  "😋": "Yummy Tasty",
  "🤗": "Hugging Face",
  "😑": "Annoyance",
  "🤫": "Shh!"
};

var emojisWeHave = Object.keys(emojiDictionary);

export default function App() {
  var [userInput, setUserInput] = useState("");
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    //inputChangeHandler is defined,event is a parameter
    var userInput = event.target.value; //storing the value in userInput variable
    //console.log(userInput);
    setUserInput(userInput);

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry,we can't find it";
    }
    setMeaning(meaning);
  }

  function onClickHandler(x) {
    var meaning = emojiDictionary[x];

    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "green" }}>Emojipedia</h1>
      <h2>Find your emoji meanings</h2>
      <h3>
        Ever got confused with emojis? Don't get what your friends are tryin to
        say? Here's a small web app to find emoji meanings.
      </h3>

      <div>
        <h3>Put your Emoji here:</h3>
        <input onChange={inputChangeHandler}></input>
      </div>

      <div>
        <h3>You Selected:{userInput}</h3>
      </div>

      <div>
        <h3>The meaning is:{meaning}</h3>
      </div>

      <div>
        <h4>Emojis we have:</h4>
        {emojisWeHave.map(function (y) {
          return (
            <span
              onClick={() => onClickHandler(y)}
              style={{ fontSize: "2rem", padding: "0.3rem", cursor: "pointer" }}
            >
              {y}
            </span>
          );
        })}
      </div>
    </div>
  );
}
