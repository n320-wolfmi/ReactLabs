import * as React from "react"
import { useState } from "react";
import ml5 from "ml5";
import SentimentGraph from "./SentimentGraph";
const sentiment = ml5.sentiment("movieReviews", modelReady);

function modelReady() {
  console.log('Sentiment Model Loaded!');
}

export default function SentimentDisplay() {
  const [sentText, setSentText] = useState("")

  return (
    <div className="SentimentDisplay">
      <textarea
        value={sentText}
        onChange={(event) => {
          setSentText(event.target.value);
        }}
      />
      <button onClick={() => caluclateSentiment()}>Caluclate sentiment</button>
    </div>
  );

  function caluclateSentiment() {
    //predict sentiment
    let predictedNum = sentiment.predict(sentText)

    //clear text box
    setSentText("")

    //pass sentiment out of this component
    SentimentGraph(predictedNum)
  }
}