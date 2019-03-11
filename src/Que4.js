import React from "react";
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Que4 extends React.Component{

    state ={
    zodiac : "",
    isSelected : true,
    count : 0
}


addUserResponse(){
 axios.post("http://localhost:8080/v1/dest" , {
        destination :this.state.answer
      
  }).then(res => console.log(res.data));
}

handleOnChange(event){
    console.log("Answer from Que1 handleChange   " +event.target.value);
    
    this.setState({
        zodiac : event.target.value,
        count : this.state.count + 1
    })
   // console.log("count   " +this.state.count);
}
    render(){
        return(
            
 <div className = "select-container">
<h2>What is Zodiac</h2>
<hr color = "Black"/>

 <Scrollbars style={{ width: 440, height: 300 }}>
     <p>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Aries" /> {"   "}Aries </p>
<hr color = "Black"/>

<div>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Taurus"/> {"   "}Taurus </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Gemini"/> {"   "}Gemini </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Cancer"/> {"   "}Cancer </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Leo" /> {"   "}Leo  </p>
<hr color = "Black"/>
</div>

<div>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Virgo"/> {"   "}Virgo  </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Libra"/> {"   "}Libra </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Scorpio"/> {"   "}Scorpio </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Sagittarius" /> {"   "}Sagittarius </p>
<hr color = "Black"/>
</div>

<div>
<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Capricorn"/> {"   "}Capricorn </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Aquarius"/> {"   "}Aquarius </p>
<hr color = "Black"/>

<p><input type = "checkbox"  onChange = {this.handleOnChange.bind(this)} disabled = {false} value = "Pisces"/> {"   "}Pisces </p>
<hr color = "Black"/>
</div>
</p>
 </Scrollbars>

 <NavLink to="/que3"  disabled = {!this.state.isSelected} onClick = {this.addUserResponse.bind(this)}> Previous</NavLink>
            </div>

        )
    }
} 

export default Que4;