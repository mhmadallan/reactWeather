/*
 * @Author: Muhammad.Allak  
* @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-14 11:53:02
*/
import React from "react";
import DataStore from "../stores/DataStore";

export default class DataList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
         
        }
    }

    componentDidMount() {
        DataStore.on("storeUpdated", this.updateBackgroundColor);
    }

    componentWillUnmount() {
        DataStore.removeListener("storeUpdated", this.updateBackgroundColor);
    }
    
    updateBackgroundColor = async() => {
        const data = await DataStore.getData();
       this.setState({ data: data, loading: false });
        
    }
       
    render() {
        let textStyles = {
            fontSize:'20px',
            textAlign: 'left', alignSelf: 'stretch',
            
        }
      
        const list = this.state.data.map((item, index) => {
            
            return (
                <div class="row">
                <div class="col-md-4"></div>
                <li key={index} class="list-group-item col-md-4">
                  
                  <ul class="list-group list-group-flush" style = {textStyles}>
                    <li style={{backgroundColor:'black'}}></li> 
                    <li class="list-group-item">City :  {item.place}</li>
                    <li class="list-group-item">Type :  {item.type}</li>
                    <li class="list-group-item">Unit :  {item.unit}</li>
                   
                    <li class="list-group-item">Value :  {item.value}</li>
                    <li class="list-group-item">Time :  {item.time}</li>
                            
                    
                  </ul>
                  
                </li>
                <div class="col-md-4"></div>
                </div>
            );
    
        });
        return (
              <div>
                   
                         <h3> Data List</h3>
                         <ul class="list-group list-group-flush">
                                {list}
                         </ul>
                   
                   
    
                    
             </div>
        );
    }
}