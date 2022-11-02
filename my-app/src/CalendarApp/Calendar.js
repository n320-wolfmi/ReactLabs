import React, { useState, useEffect } from "react"
import "./style.css"

export default function Calendar() {
    const[state, setState] = useState([])

    useEffect(() => { //on every screen render
        fetch("data/calendar.json") //fetch json data
            .then((res) => res.json()) //return json as object
            .then((week) => {
                setState(week) //set objects as state using setState
            })
    }, [])

    //pre-render
    const dayList = state.map((day) => ( //loop through json array for each day in the week
        //create a day view for each day in the week loop 
        <div className="day-view" key={ day.id }>
            <h3>{ day.dayNum }</h3>
            <div>
                <p>{ day.events[0].eventName }</p>
                <p className="subtitle">{ day.events[0].eventTime }</p>
            </div>
            <div>
                <p>{ day.events[1].eventName }</p>
                <p className="subtitle">{ day.events[1].eventTime }</p>
            </div>
        </div>
    ))


    return (

        <div>
            <h2>In Class React Calendar App</h2>

            {/* what 1 week would look like in a month calendar view */}
            <div id="calendar-container">
                <div className="week-view">
                    <div className="day-header">Sunday</div>
                    <div className="day-header">Monday</div>
                    <div className="day-header">Tuesday</div>
                    <div className="day-header">Wednesday</div>
                    <div className="day-header">Thursday</div>
                    <div className="day-header">Friday</div>
                    <div className="day-header">Saturday</div>
                </div>
                <div className="week-view">
                    { dayList }
                </div>
            </div>
        </div>
    ) 
}