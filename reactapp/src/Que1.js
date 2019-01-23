import React from 'react';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import './App.css';

class Que1 extends React.Component{

state ={
    answer : "",
    count : 0
}

handleOnChange(event){
    console.log("Answer from Que1 handleChange   " +event.target.value);
    
    this.setState({
        answer : event.target.value,
        count : this.state.count + 1
    })
   // console.log("count   " +this.state.count);
}



addUserResponse(){
 axios.post("http://localhost:8080/v1/dest" , {
        age :this.state.answer
      
  }).then(res => console.log(res.data));
}

renderButton(){
    if(this.state.count > 0){
        return(
            <div>
               <button className="next-button" color="primary" > <NavLink to="/que2"  onClick={this.addUserResponse.bind(this)}>Next</NavLink> </button>
            </div>
        )
    }
}

handleOnSubmit(){
    console.log("hadke submit");
}

render(){
    const {count} = this.state;
    
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
<h2>What is Age</h2>
<hr color = "Black"/>


<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "10-20" /> {"   "}10-20</p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "20-30"/> {"   "}20-30</p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "30-40"/> {"   "}30-40</p>
<hr color = "Black"/>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "40+"/> {"   "}40+</p>
<hr color = "Black"/>

{this.renderButton()}

</div>

    );
}
}

export default Que1;