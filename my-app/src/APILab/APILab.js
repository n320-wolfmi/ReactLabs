import React from "react"
import { useState, useEffect } from "react";
import { MarsGallery } from "./MarsGallery"
import { NasaAPIConnection } from "./DataConnection";
import "./styles.css"
import Snowfall from "react-snowfall"

export default function APILab() {
    const[year, setYear] = useState(2010)
    const[pics, setPics] = useState([])

    useEffect(() => {
        const timer = setTimeout(async () => {
            let returnedPictures = await NasaAPIConnection(year)
            setPics(returnedPictures.photos)
        }, 1000)

        return() => clearInterval(timer)
    }, [year])

    return(
        <div>
            <h1>Christmas on Mars at..</h1>
            <input 
                aria-label="date" 
                type="range"
                min="2008" max="2021" 
                value={year}
                onChange={(e) => {
                    setYear(e.target.value)
                }}
            />
            <div>{year}</div>
            <MarsGallery images={pics}/>
            <Snowfall/>
        </div>
    )
}