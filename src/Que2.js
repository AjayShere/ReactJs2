import React from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, notification } from 'antd';

class Que2 extends React.Component{

state ={
    answer : [],
    manualAnswer : "",
    count : 0
}

addUserResponse(){

    console.log("size of request  " +this.state.answer.length)
 axios.post("http://localhost:8080/v1/dest" , {
        colour :this.state.answer
      
  }).then(res => console.log(res.data));
}

handleOnChange(event){
    console.log("Answer from Que1 handleChange   " +event.target.value);
    this.setState({
        answer :[...this.state.answer, event.target.value],
         count : this.state.count + 1
    })
    console.log("array size   " +this.state.answer.length)
}

handleManualchange(event){
    console.log("from handleManualchange   " +event.target.value);
    this.setState({
        manualAnswer : event.target.value
    })
}


addToManualEntryToArray(){
   console.log("from addtoarray");
    this.setState({
        answer :[...this.state.answer, this.state.manualAnswer]
       
    })
}
renderNextButton(){
    if(this.state.count > 0){
        return(
            <div>
                <NavLink to="/que3"   onClick={this.addUserResponse.bind(this)}> Next</NavLink>
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
<h2>  What is your fav colour is</h2>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this) } value = "Red"/> {"   "}Red</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "Blue"/> {"   "}Blue</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "White"/> {"   "}White</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)}  value = "Black"/> {"   "}Black</p>
<hr color = "Black"/>
<p> Elements from answerArray   {this.state.answer}</p>

<div>
    <p>Other : {"  "}</p> <input type = "text" value= {this.state.manualAnswer} onChange={this.handleManualchange.bind(this)}/>
   {"  "} <button onClick = {this.addToManualEntryToArray.bind(this)}> Add </button>
</div>
<div>
<NavLink to="/que1" > Previous</NavLink>
<p> {"        "}</p>
{this.renderNextButton()}
</div>
    </div>

    );
}
}

export default Que2;