/*
 * @Author: Muhammad.Allak  
* @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-13 23:34:20
*/
import React from "react";
import * as AppAction from "../actions/AppAction";
import DataStore from "../stores/DataStore";

export default class ButtonClass extends React.Component {

    

onButtonClick = (city) => {
    AppAction.getCity(city)
};

render() {
    
        let styles = {
          margin: '20px',
          width: '150px',
          height: '50px',
         // backgroundColor: 'yellow',
    
  } 
    
    return (
        
            <div class="container">
  <div class="row">
    <div class="col-md-2">
    
    </div>
    <div class="col-md-8">
    <button style = {styles} class="btn btn-primary" onClick={() => this.onButtonClick("Aarhus")}>Aarhus</button>
            <button style = {styles} class="btn btn-danger" onClick={() => this.onButtonClick("Horsens")}>Horsens</button>
            <button style = {styles} class="btn btn-success" onClick={() => this.onButtonClick("Copenhagen")}>Copenhagen</button>
            </div>    
    <div class="col-md-2">
    
   
    </div>
  </div>
</div>
           
      

    );
}

}