import React, { Component } from "react"
import ReactDOM from "react-dom";

import Main from './Main';
import DeadLine from './DeadLine';

class App extends Component {
  state = {
    renderView: 0
  }

  clickPageBtn = pageId => {
    this.setState({
      renderView: pageId
    })
    
  }

  render() {
    switch(this.state.renderView){
      case 0:
        return <Main clickPageBtn={this.clickPageBtn}/>
      case 1:
        return <DeadLine clickPageBtn={this.clickPageBtn}/>
      default:
        return <Main clickPageBtn={this.clickPageBtn}/>
    }
  }
}

export default App
