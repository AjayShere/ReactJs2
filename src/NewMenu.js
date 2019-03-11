import React from 'react';
import { slide as Menu } from 'react-burger-menu';

class NewMenu extends React.Component {

    render(){



        return(
            <div>

<h1>NewMenu</h1>

  <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id= "Settings" className="menu-item--small" href="">Settings</a>
      </Menu>
            </div>
        )
    }
}

export default NewMenu;