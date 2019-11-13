/*
 * @Author: Muhammad.Allak  
* @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-13 23:35:02
*/
import dispatcher from "../dispatcher";

export const RECEIVE_DATA = {
  DATA : "AppAction.getCity"
}
export async function getCity(city){
  
          let data = await fetch("http://localhost:8080/data").then(d => d.json());
          const list = [];
          data.map((item, index) => {
            if (item.place === city){
           
               list.push(item);
            }
          });
          
          console.log("yah!",list);
          dispatcher.dispatch({type : RECEIVE_DATA, value : list});
  }
  
  

  