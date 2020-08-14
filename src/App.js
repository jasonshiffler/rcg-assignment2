import React, { Component } from "react";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import "./App.css";

class App extends Component {
  state = {
    length: 0,
    stringValue: "",
  };

  stringChangeHandler = (event) => {
    const newString = event.target.value;
    const newLength = event.target.value.length;
    this.setState({ stringValue: newString, length: newLength });
  };

  stringRemoveCharHandler = (index) => {
    const newState = {...this.state};
    let newCharArray = newState.stringValue.split('');
    newCharArray.splice(index, 1);
    console.log(newCharArray);
    this.setState({ stringValue: newCharArray.join('') });
    
  };

  render() {
    const stringArray = this.state.stringValue.split("");

    const charComps = stringArray.map((c, index) => {
      return (
        <CharComponent
          char={c}
          click={this.stringRemoveCharHandler.bind(this,index)}
        ></CharComponent>
      );
    });

    return (
      <div className="App">
        <label>Text Input</label>
        <input type="text" onChange={this.stringChangeHandler}></input>
        <p>{this.state.length}</p>
        <ValidationComponent length={this.state.length}></ValidationComponent>
        {charComps}
      </div>
    );
  }
}

export default App;
