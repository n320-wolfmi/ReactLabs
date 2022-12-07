import './App.css'
import { useState } from "react"
import React from "react"
import AnimLab from "./AnimLab/AnimLab"
import Map from "./Map/Map"
import Calendar from './CalendarApp/Calendar'
import Inventory from './InventoryBag/Inventory'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import DataStoresLab from './DataStoresLab/DataStoreLab'
import SpacedRepetition from './SpacedRepetition/SpacedRepetition'
import SentimentAnalysis from './SentimentAnalysis/SentimentAnalysis'
import ThreeTest from "./ThreeTest/ThreeTest"
import APILab from './APILab/APILab'

export default class App extends React.Component {

  state = {
    pages: [<APILab/>, <ThreeTest/>, <SentimentAnalysis/>, <DataStoresLab/>,  <SpacedRepetition/>, <MusicPlayer/>, <Inventory/>, <Calendar/>, <Map/>, <AnimLab/>],
    curPage: 0
  }

  render() {
    return (
      <div className="App">
        <h1>React Practice and Labs | Click one!</h1>
        <h3>Matthew Wolf, N320</h3>
        <div className='componentButtons'>
          <button onClick={() => { this.swapProject(0) }}>API Lab (Dec. 7)</button>
          <button onClick={() => { this.swapProject(1) }}>Three Fiber Lab (Dec. 1)</button>
          <button onClick={() => { this.swapProject(2) }}>(In Class) Sentiment Analysis (Dec. 1)</button>
          <button onClick={() => { this.swapProject(3) }}>Data Stores Lab (Nov. 17)</button>
          <button onClick={() => { this.swapProject(4) }}>(In Class) Spaced Repetition (Nov. 22)</button>
          <button onClick={() => { this.swapProject(5) }}>Music Player Lab (Nov. 10)</button>
          <button onClick={() => { this.swapProject(6) }}>Inventory Bag Lab (Nov. 3)</button>
          <button onClick={() => { this.swapProject(7) }}>(In Class) Calendar App (Nov. 1)</button>
          <button onClick={() => { this.swapProject(8) }}>Map Data Lab (Oct. 6)</button>
          <button onClick={() => { this.swapProject(9) }}>Animation Lab (Sept. 29)</button>
        </div>
        
        <div className='curPage'>
          {this.state.pages[this.state.curPage]}
        </div>
      </div>
    )
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex })
  }
}