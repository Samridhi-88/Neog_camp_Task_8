import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😭": "Crying",
  "😡": "Angry",
  "🥱": "Lazy",
  "🐒": "Monkey",
  "🤦‍♀️": "Hye bhagban",
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>EMOJIS</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>
      <h3> emojis😊</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );