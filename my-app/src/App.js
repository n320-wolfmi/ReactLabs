import './App.css';
import React from "react";
import AnimLab from "./AnimLab/AnimLab"
import Map from "./Map/Map"
import Calendar from './CalendarApp/Calendar';

export default class App extends React.Component {

  state = {
    pages: [<Calendar/>, <Map/>, <AnimLab/>],
    curPage: 0
  }

  render() {
    return (
      <div className="App">
        <h1>React Practice and Labs | Click one!</h1>
        <h3>Matthew Wolf, N320</h3>
        <div className='componentButtons'>
          <button onClick={() => { this.swapProject(0) }}>(In Class) Calendar App (Nov. 1)</button>
          <button onClick={() => { this.swapProject(1) }}>Map Data Lab (Oct. 6)</button>
          <button onClick={() => { this.swapProject(2) }}>Animation Lab (Sept. 29)</button>
        </div>
        {this.state.pages[this.state.curPage]}
      </div>
    )
  }

  swapProject(projectIndex) {
    this.setState({ curPage: projectIndex })
  }
}