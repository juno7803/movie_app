import React from 'react';
import ProtoTypes from 'prop-types'; // to check props send correctly

class App extends React.Component{
  state={
    count: 0
  };
  add = () =>{
    this.setState(current => ({count: current.count +=1}));
  };// 이게 맞는 표현
  minus =() =>{
    this.setState({count: this.state.count -=1});
  };// 문법적으론 맞지만 state의 목적에 부합하지 않는 표현
  
  // kind of member func
  render(){
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        {/* onClick={} is React magic */}
      </div>
    )
  }
}

export default App;