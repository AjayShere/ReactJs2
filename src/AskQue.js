import React from 'react';
import DisplayQue from './DisplayQue';
import { NavLink } from "react-router-dom";

import Que1 from './Que1';

class AskQue extends React.Component {
constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  openPopup = () => {
    this.setState({
      isOpen: true
    });
  }

  closePopup = () => {
    this.setState({
      isOpen: false
    });
  }

render(){
    return(
<div >
     
        <button onClick={this.openPopup}>
    <p> Help Us to know you better</p>
</button>

</div>
    );
}
}

export default AskQue;