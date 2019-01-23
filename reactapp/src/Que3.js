import React from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Que3 extends React.Component{

state ={
    answer : "",
    isSelected : false,
    count :0
}



handleOnChange(event){
    console.log("Answer from Que1 handleChange   " +event.target.value);
    this.setState({
        answer : event.target.value,
        isSelected : true,
        count : this.state.count + 1
    })
}

addUserResponse(){
 axios.post("http://localhost:8080/v1/dest" , {
        destination :this.state.answer
      
  }).then(res => console.log(res.data));
}

renderNextButton(){
    if(this.state.count > 0){
        return(
            <div>
                <NavLink to="/que4"   onClick={this.addUserResponse.bind(this)}> Next</NavLink>
            </div>
        )
    }
}

render(){
    const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

    return(
    <div className = "select-container">
<h2>Where are you heading now</h2>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "Office"/> {"   "}Office</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "Party"/> {"   "}Party</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "Out"/> {"   "}Out</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "Tour"/> {"   "}Tour</p>
<hr color = "Black"/>

<NavLink to="/que2"  disabled = {!this.state.isSelected} onClick = {this.addUserResponse.bind(this)}> Previous</NavLink>
   
   {this.renderNextButton()}

    </div>


    );
}
}

export default Que3;