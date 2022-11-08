import React, { useState, useEffect, useRef } from "react"
import MusicList from "./MusicList"
import PlayWidget from "./PlayWidget"
import MusicVis from "./MusicVis"

export default function MusicPlayer() {
    const [tracks, setTracks] = useState([])
    const [curPlaying, setCurPlaying] = useState({})
    const [curProgress, setCurProgress] = useState(0)

    useEffect(() => {
        fetch("data/music.json") //get music data
            .then((response) => response.json()) //convert to json
            .then((data) => {
                setTracks(data)
            })
    }, []) //useEffect only happens once

    return(
        <div>
            <h1>Music Player</h1>

            <p>Now Playing: {curPlaying.title}</p>
            <MusicList 
                tracks={tracks} 
                curPlaying={curPlaying}
                onSelected={(id) => {
                    trackSelected(id)
                }}
            />
            <PlayWidget currentTrack={curPlaying} setCurProgress={setCurProgress} />
            <MusicVis size={50} progress={curProgress} />
        </div>
    )

    function trackSelected(id) {
        //find track
        const foundTrack = tracks.find((track) => track.id == id)

        //set track as current selected track
        setCurPlaying(foundTrack)
    }
}