import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    setTimeout(()=>{
      this.setState({isLoading: false});
    },6000);// javascript func : setTimeout(callback,시간)
  }
  render() {
    const {isLoading} = this.state; // es6 문법->아래에서 this.state.isLoading 할필요 없어짐
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    )
  }
}

export default App;