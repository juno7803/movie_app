import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location,history} = this.props;
        console.log(this.props);
        if(location.state === undefined){
            history.push("/"); // undefined면 home으로 navigate
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return(
                <span>{location.state.title}</span>
            );
        }
        else{
            return null;
        }
    }
}

export default Detail;