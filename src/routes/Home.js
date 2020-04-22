// #6 Getting Ready for the Router : React 웹 페이지에 navigator 만들기!
import React from 'react';
import Axios from 'axios';
import Movie from '../components/Movie'; // '../' -> 현재 폴더의 상위폴더로 이동
import "./Home.css";

/*
    #6.5 다른 페이지로 갔다가 다시 Home으로 올때, movie api를 다시 로딩해오는 문제점
    -> "redux"를 이용하여 데이터(movie list등)를 잠시 스크린 바깥에 보관하여 다시 home으로 돌아와도 로딩할 필요가 없음!
    -> redux는 결국 state를 저장한다.
*/
class Home extends React.Component {
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
      <section className="container">
        {isLoading ? 
          <div className = "loader">
            <span className = "loader_text">Loading...</span>
          </div> : 
          <div className="movies">
            { movies.map(param=>(
          <Movie
            key={param.id}
            id={param.id}
            year={param.year}
            title={param.title}
            summary={param.summary}            
            poster={param.medium_cover_image}
            genres={param.genres} // genres: 배열로 주어짐
          />
        ))}
         </div>
        }
      </section>
    );
  }
}

export default Home;