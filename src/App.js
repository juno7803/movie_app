import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  // async function getMovies() 라고 써야하지만, 멤버함수는 이렇게 쓸 수 없음
  getMovies = async () =>{
    const movies = await Axios.get("https://yts.mx/api/v2/list_movies.json");
    // fetch api = axios 같은 역할
  }// const getMovie = function smth() {} 과 같은 느낌
  
  componentDidMount() {
    this.getMovies();
    console.log(this);  
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