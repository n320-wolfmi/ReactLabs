import './App.css'
import React from "react"
import AnimLab from "./AnimLab/AnimLab"
import Map from "./Map/Map"
import Calendar from './CalendarApp/Calendar'
import Inventory from './InventoryBag/Inventory'
import MusicPlayer from './MusicPlayer/MusicPlayer'
import FakeKanban from './DataStoresLab/FakeKanban'
import SpacedRepetition from './SpacedRepetition/SpacedRepetition'

export default class App extends React.Component {

  state = {
    pages: [<SpacedRepetition/>, <MusicPlayer/>, <Inventory/>, <Calendar/>, <Map/>, <AnimLab/>],
    curPage: 0
  }

  render() {
    return (
      <div className="App">
        <h1>React Practice and Labs | Click one!</h1>
        <h3>Matthew Wolf, N320</h3>
        <div className='componentButtons'>
          <button onClick={() => { this.swapProject(0) }}>(In Class) Spaced Repetition (Nov.17)</button>
          <button onClick={() => { this.swapProject(1) }}>Music Player Lab (Nov. 10)</button>
          <button onClick={() => { this.swapProject(2) }}>Inventory Bag Lab (Nov. 3)</button>
          <button onClick={() => { this.swapProject(3) }}>(In Class) Calendar App (Nov. 1)</button>
          <button onClick={() => { this.swapProject(4) }}>Map Data Lab (Oct. 6)</button>
          <button onClick={() => { this.swapProject(5) }}>Animation Lab (Sept. 29)</button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    )
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex })
  }
}