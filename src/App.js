import React from 'react';
import ProtoTypes from 'prop-types'; // to check props send correctly

function Food({name, picture,rating}){
  return (
    <div>
      <h2>I like {name}</h2>  
      <img src={picture} alt={name}/>
      <h4>rating: {rating}/5.0</h4>
    </div>
  )
}
const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 4.8
  },
  {
    id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating : 4.9
  },
  {
    id : 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating : 4.5
  },
  {
    id : 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating : 4.0
  },
  {
    id : 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating : 4.7
  }
];

Food.propTypes={
  name: ProtoTypes.string.isRequired,
  // props명: ProtoTypes.자료형.(isRequired : 필수로 존재해야 하는지 체크)
  picture: ProtoTypes.string.isRequired,
  rating: ProtoTypes.number
  // 이런식으로 쓰면 rating이 쓰이지 않아도 error 발생X
}

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {foodILike.map(foods=>
      <Food
        //put props here
        key = {foods.id} // to make each Child unique : use "key" prop
        name = {foods.name}
        picture = {foods.image}
        rating = {foods.rating}
      ></Food>)}
      {/* to insert javascript code : use {}*/}
    </div>
  );
}

export default App;