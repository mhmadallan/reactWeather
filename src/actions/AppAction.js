/*
 * @Author: Muhammad.Allak  
 * @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-14 11:13:56
*/
import dispatcher from "../dispatcher";

export const RECEIVE_DATA = {
  DATA : "AppAction.getCity"
}
export const TIME_DATA = {
  DATA : "AppAction.getIntervaData"
}
export async function getCity(city){
  
          let data = await fetch("http://localhost:8080/data").then(d => d.json());
          const list = [];
          data.map((item, index) => {
            if (item.place === city){
           
               list.push(item);
            }
          });
          
          //console.log("yah!",list);
          dispatcher.dispatch({type : RECEIVE_DATA, value : list});
  }

  export async function getIntervalData(firstDate,endDate) {
    
        let data1 = await fetch("http://localhost:8080/data").then(d => d.json());
        const list1 = [];
        data1.map((item) => {
          if(item.time >= firstDate && item.time <= endDate) {
              list1.push(item);
          }
        });
        console.log("Time Data", list1);
        dispatcher.dispatch({type : TIME_DATA, value: list1})  
  }
  
  

  