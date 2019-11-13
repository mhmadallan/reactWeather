/*
 * @Author: Muhammad.Allak  
* @Date: 2019-11-13 23:33:07  
 * @Last Modified by: Muhammad_Allak
 * @Last Modified time: 2019-11-13 23:34:45
*/
import {EventEmitter} from "events";
import dispatcher from "../dispatcher";
import * as AppAction from "../actions/AppAction";
// this store class is to save data or to fetch data from a url
class DataStore extends EventEmitter{

  
  constructor(props){
    super(props);
    this.data = fetch("http://localhost:8080/data").then(d => d.json());
  }

  async boo(){
    var result = await this.data;
    return result;
  }
  getAll(){
    
    return this.data;
  }
  
  handelActions(action){
    switch(action.type) {
      case AppAction.RECEIVE_DATA:{
        this.data = action.value;
        this.emit("storeUpdated");
        break;
      }
      default: {
      }
    }
      
  }
  
  
  
    // But the best part is, we can just keep awaiting different stuff, without ugly .then()s
    //var somethingElse = await getSomethingElse()
    //var moreThings = await getMoreThings()
  
  async getData() {
    var result = await this.data;
    console.log("Done!",result);
    return result;
}

}


const dataStore = new DataStore;

dispatcher.register(dataStore.handelActions.bind(dataStore));
export default dataStore;