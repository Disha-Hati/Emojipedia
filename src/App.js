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
  "😑": "Annoyance"
};

export default function App() {
  var [userInput, setUserInput] = useState("");
  var [meaning, setMeaning] = useState("");
  function inputChangeHandler(event) {
    //inputChangeHandler is defined,event is a parameter
    var userInput = event.target.value; //storing the value in userInput variable
    console.log(userInput);
    setUserInput(userInput);

    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "green" }}>Emojipedia</h1>
      <h2>Find your emoji meanings</h2>
      <small>
        Ever got confused with emojis? Don't get what your friends are tryin to
        say? Here's a small web app to find emoji meanings.
      </small>

      <div>
        <h3>Put your Emoji here:</h3>
        <input onChange={inputChangeHandler}></input>
      </div>

      <div>
        <h5>You Selected:{userInput}</h5>
      </div>

      <div>
        <h4>The meaning is:{meaning}</h4>
      </div>

      <div>
        <h5>Emojis we have:</h5>
      </div>
    </div>
  );
}
