import React from 'react';
import DisplayQue from './DisplayQue';
import { NavLink } from "react-router-dom";

const AskQue = ({property}) => {


    return(
<div >
    
    <p> Help Us to know you better</p>
    <NavLink to="/que1">Next</NavLink>
</div>
    );
}

export default AskQue;