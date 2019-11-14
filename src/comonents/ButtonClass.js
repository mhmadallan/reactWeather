/*
 * @Author: Muhammad.Allak  
* @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-14 11:48:02
*/
import React from "react";
import * as AppAction from "../actions/AppAction";
import DataStore from "../stores/DataStore";

export default class ButtonClass extends React.Component {

    

onButtonClick = (city) => {
    AppAction.getCity(city)
};

onBtnTimeInterval = (startDate, endDate) => {
  AppAction.getIntervalData(startDate,endDate)
};

getStartDate(){
  var x = document.getElementById("myStart").value;
  return x;
}
getEndDate(){
  var x = document.getElementById("myEnd").value;
  return x;
}

render() {
    
        let styles = {
          margin: '20px',
          width: '150px',
          height: '50px',
         // backgroundColor: 'yellow',
    
  } 
  let dateSyle = {
    float:'left',
    width : '150px',
    marginBottom: '20px',
    
  }
 
    
    return (
        
    <div class="container">
     <div class="row">
     <div class="col-md-2">
               
             
									<div class="col-md-12">
										<div class="form-group">
											<span style={{marginTop : '20px'}}class="form-label">Start Date</span>
											<input style={dateSyle} id="myStart" onChange={() => this.getStartDate()} class="form-control" type="date" required></input>
										</div>
									</div>
                  
                 
									<div class="col-md-12">
										<div class="form-group">
											<span class="form-label">End Date</span>
											<input style={dateSyle} id="myEnd" onChange={ () => this.getEndDate()} class="form-control" type="date" required></input>
										</div>
									</div>

                  
                  <button style = {styles} class="btn btn-warning" onClick={() => this.onBtnTimeInterval(this.getStartDate(),this.getEndDate())}>Search By Date</button>
								
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