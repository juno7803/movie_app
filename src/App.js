import React from 'react';
import Axios from 'axios';
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  
  getMovies = async () =>{
    const {data:{
      data:{movies}
      }}= await Axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); 
    this.setState({movies: movies,isLoading: false}); // setState안의 state와 원소가 이름이 같다면 setState({movies}); 라고 써줘도 동일하다!(es6 문법)
  };
  
  componentDidMount() {
    this.getMovies(); // 여기서의 this = App
  }

  render() {
    const {isLoading,movies} = this.state; // es6 문법->아래에서 this.state.isLoading 할필요 없어짐
    return (
      <section class="container">
        {isLoading ? 
          <div class = "loader">
            <span class = "loader_text">Loading...</span>
          </div> : 
          <div class="movies">
            { movies.map(param=>(
          <Movie
            key={param.id}
            id={param.id}
            year={param.year}
            title={param.title}
            summary={param.summary}            
            poster={param.medium_cover_image}
          />
        ))}
         </div>
        }
      </section>
    );
  }
}

export default App;