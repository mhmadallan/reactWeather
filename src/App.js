/*
 * @Author: Muhammad.Allak  
* @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-13 23:34:12
*/
import React, { Component } from "react";
import "./App.css";
import ButtonClass from "./comonents/ButtonClass"
import DataList from "./comonents/DataList"

class App extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {visible: true};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }
  // <Btn />
  render() {
    return (
      <div className="App">
        <ButtonClass />
        <DataList/>
       
      </div>
      
    );
  }
}

export default App;