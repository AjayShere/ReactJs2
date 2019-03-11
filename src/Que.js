import React from 'react';
import data from './data';
import AskQue from './AskQue';
import {CSSTransition} from "react-transition-group";

class Que extends React.Component{

constructor(){

super();
 this.state = {
    appearque : true,
    blockit : false,
    property : data.properties[0],
    count :0,
    selected :false
  }
}

toggleApper(){

}

nextQuestion(){
    console.log("from next");
const newIndex =  this.state.property.index + 1;
this.setState({
    property : data.properties[newIndex]
})

}

previousQuestion(){
    console.log("from pre");
 const newPreIndex = this.state.property.index - 1;
 this.setState({
     property : data.properties[newPreIndex]
 })
}


handleOnChange(event){
    console.log("from onhandle  " +event.target.name);
    console.log("id from onhandle  " +this.state.property.id);
   
if(this.state.property.id === 1 && this.state.count === 0){
this.setState({
        blockit : true,
        selected : true,
        count : this.state.count + 1
    })
}


 console.log("selected  " +this.state.selected);
    console.log("count  " +this.state.count);
    if(this.state.count === 1){
        console.log("count is now 1")
    }
//if(this.state.selected = true && this.state.count === 2){
  //  this.setState({
    //    blockit : false,
      //  count : 1
    //})
//}


}
render(){
    const {appearque , property ,blockit ,count} = this.state;
    return(
    <div>
<h2>Posting Quetions</h2>



<button onClick = {this.previousQuestion.bind(this)} disabled = {property.index === 0}> Previous </button>
<button onClick = {this.nextQuestion.bind(this)} disabled ={property.index === data.properties.length - 1}> Next</button>    

<h3>{property.id} {'.  '}{property.que}</h3>
<p><input type = "checkbox" name = {this.state.property.option1} 
disabled = {property.id === 1 && blockit } onChange = {this.handleOnChange.bind(this)}/>{' '} {property.option1} </p>

<p><input type = "checkbox" name = {this.state.property.option2}  
disabled = {property.id === 1 && blockit} onChange = {this.handleOnChange.bind(this)}/>{' '} {property.option2} </p> 

<p><input type = "checkbox" name = {this.state.property.option3} 
 disabled = {property.id === 1 && blockit } onChange = {this.handleOnChange.bind(this)}/>{' '} {property.option3} </p>

<p><input type = "checkbox"  name = {this.state.property.option4}
 disabled = {property.id === 1 && blockit } onChange = {this.handleOnChange.bind(this)}/>{' '} {property.option4} </p>



    <CSSTransition
    in = {appearque}
    appear = {true}
    timeout = {600}
    classNames = "fade"
    >
    <AskQue  property = {property}/>
    </CSSTransition>
    </div>
  );
}
}

export default Que;