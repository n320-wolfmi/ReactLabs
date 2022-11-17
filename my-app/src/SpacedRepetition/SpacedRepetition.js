import React from "react"
import { Provider } from 'react-redux'
import CardStore from "./CardStore"
import ShowCard from "./ShowCard"
import './style.css'

export default function SpacedRepetition() {
    
    return(
        <div>
            <Provider store={CardStore}>
                <ShowCard/>
            </Provider>
        </div>
    )
}

//collection of cards
//each card has properties: question(string), answer(string), mastery(number)

//log data into a React component, create a view that displays a single question, button to show the answer
//show answer, replace show answer button with with different buttons
    //"didn't get it" (mastery * .5)
    //"getting it" (mastery * .9)
    //"totally understand" (mastery * 1.2)

//after rating the question, sort the questions array based on mastery (low to high)
//show the question with the lowest mastery in the array