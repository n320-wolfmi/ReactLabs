import "./styles.css";
import * as React from "react";
import SentimentDisplay from "./components/SentimentDisplay";
import SentimentGraph from "./components/SentimentGraph";
import { useState } from "react";
import { useEffect } from "react";

export default function SentimentAnalysis() {

  return (
    <div className="SentimentAnalysis">
      <SentimentDisplay />
      <SentimentGraph />
    </div>
  );
}
