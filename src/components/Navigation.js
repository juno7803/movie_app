import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
        <div className="nav">
            <Link to ="/">Home</Link>
            <Link to ="about">About</Link>
        </div>
    );
}
//#6.3 ABOUT 버튼을 클릭하면 정보를 props로 정보를 넘겨주는 방식으로 설계
// route는 router에게 props를 전달
export default Navigation;

/*
    href 로 쓰면 html이 전체 새로고침 됨.. React 무용지물
    그래서 사용하는 것이 react-router-dom 의 Link!
    href 대신 to 를 사용
*/