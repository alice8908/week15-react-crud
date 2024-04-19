import React, {Component} from "react";
import {HouseList} from './components/HouseList';
import {NewRoom} from "./components/NewRoom";




class App extends Component {
  render(){
    return(
      <div>
        <NewRoom/>
        <HouseList/>
      </div>
    )
  }
} export default App