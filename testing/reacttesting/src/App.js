import React from 'react';
import Button from "./Component/Button"
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count: 0
    }
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleReduce = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  render(){
    const {count} = this.state
    return (
      <div className="App">
          <h1>Count:</h1>
          <h1 data-testid="counter">{count}</h1>

          <Button label="ADD" onClick={this.handleAdd} />
          <Button label="REDUCE" onClick={this.handleReduce} />
      </div>
    )
  }
}

export default App;
