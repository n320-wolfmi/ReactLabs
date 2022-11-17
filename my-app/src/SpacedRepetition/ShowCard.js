import React from "react"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { understandFull, understandHalf, understandNone } from "./CardSlice"
import ShowAnswer from "./ShowAnswer"

export default function ShowCard() {
    const[lowMastery, setLowMastery] = useState([])
    const[showAnswer, setShowAnswer] = useState(false)

    const collection = useSelector((state) => state.cards.cardCollection)
    const mastery = useSelector((state) => state.cards.cardCollection[0].mastery)
    const question = useSelector((state) => state.cards.cardCollection[0].question)

    console.log(showAnswer)
    
    return (
        <div id="masteryCard">
            <h3>Mastery Level: {mastery}</h3>
            <h4>{question}</h4>
            { !showAnswer ? <button onClick={() => {setShowAnswer(true)}}>Show Answer</button> : null }
            
            { showAnswer ? <ShowAnswer/> : null }
        </div>
    )
}