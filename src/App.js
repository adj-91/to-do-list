import './App.css';
import { Component } from 'react';
import cross from "./cross.png";

/*To-do app challenge:
Add todo’s
Remove todo’s
Tick off/Complete todo’s
*/

class App extends Component {

  state = {
    listItems: [],
    newItem: ""
  }

  buttonHandler = (val) => {
    
    this.setState({listItems: [...this.state.listItems, this.state.newItem]})
    
  }
  
  addToListHandler = (val) => {
  this.setState({newItem: val.target.value})
  }

  removeItemhandler = (index) => {
    let itemArray = this.state.listItems
    itemArray.splice(index, 1);
    this.setState({listItems: itemArray});
    console.log(this.state.listItems);
  }

render() {

  return (
    <div className="App">
      <h1 id="titleText">To Do List</h1>
      <TaskList value={this.state.newItem} inputHandler={this.addToListHandler} buttonHandler={this.buttonHandler} />
      <br />
      <div className="listItems">{this.state.listItems.map((item, index) => (
          <li id="list" type="1" key={index}>{item}&ensp;
          <input id="checkBox" type="checkbox"/>
          <img id="cross" onClick={()=>this.removeItemhandler(index)} src={cross}/></li>
        ))}</div> 
    </div>
  );
}
}

const TaskList = (props) => {

return(
  <div className="input">
    <input id="textBox" type="text" onChange={props.inputHandler} />
    <button id="button" onClick={props.buttonHandler}>Add</button>
  </div>
)};

export default App;
