import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";


function App(){
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="`/movie/${id}`" component={Detail}/>
    </HashRouter>
  );
}
//#6.2 Link는 Router(라우터) 바깥에서 쓸 수 없다.(HashRouter or BrowserRouter)
// 다른 모든것들은 Router 바깥에 써도 상관없으나, Link만은 Router 안에 써야한다!

//#6.3 Router 안의 Route들은 기본적으로 react-route-dom이 주는 props를 가진다.
export default App;

/*
  Route 컴포넌트는
  path에 따라서 navigating을 해주는데,
  path="/" 일때 Home
  path="/about" 일때 예상처럼 About 인게아니라 Home About이 나왔는데,

  이는 /가 /about 에서도 인식되어 두개의 컴포넌트가 렌더링 된 것이다!
  이것이 react-router가 라우팅하는 방식이다!

  요걸 해결해 주기 위한 방법이 exact={true}임! 딱 "/"만 들어가야 라우팅 하여 렌더링 하겠다는 뜻
*/