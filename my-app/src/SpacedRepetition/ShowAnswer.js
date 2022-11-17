import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { understandFull, understandHalf, understandNone } from "./CardSlice"

export default function ShowAnswer() {
    const[displayAnswer, setDisplayAnswer] = useState(false)
    const answer = useSelector((state) => state.cards.cardCollection[0].answer)
    const dispatch = useDispatch()

    return(
        <div>
            <h3>{answer}</h3>
            <div className="cardButtons">
                <button onClick={() => dispatch(understandFull())}>Totally Understand</button>
                <button onClick={() => dispatch(understandHalf())}>Getting It</button>
                <button onClick={() => dispatch(understandNone())}>Didn't Get It</button>
            </div>
        </div>
    )
}