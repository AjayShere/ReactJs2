import React from 'react';
import {NavLink} from "react-router-dom";
import StyleStats from './StyleStats';


class Widget extends React.Component{

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
            <div>
                <h3 >My Profile</h3>
                <hr color = "Black"/>

                <h3>Fashion Blog</h3>
                <hr color = "Black"/>

                <h3>Group</h3>
                <hr color = "Black"/>

                <h3><NavLink to="/style">Style Stats </NavLink></h3>
                <hr color = "Black"/>

                <h3>Destination</h3>
                <hr color = "Black"/>

                <h3>Settings</h3>
                <hr color = "Black"/>


            </div>
        )
    }
}

export default Widget;