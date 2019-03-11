import React from 'react';
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import menucontent from './menucontent';
import Que2 from './Que2';
import Widget from './Widget';

class Menu extends React.Component{



 

    constructor(props) {
    super(props)


this.items = []
    for (let i=1; i<=5; i++) {
      this.items.push(i)
    }

    this.state = {
      menuOpen: false,
    }
  }

  openMenu() {
    this.setState({ menuOpen: true })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

    render(){
        var user = {
    names : ["ajay" , "ravi" ,"ankit"]
    }
        return(
             <div>
      <CheeseburgerMenu
        isOpen={this.state.menuOpen}
        closeCallback={this.closeMenu.bind(this)}>
       <Widget />

      </CheeseburgerMenu>
      
      <HamburgerMenu
        isOpen={this.state.menuOpen}
        menuClicked={this.openMenu.bind(this)}
        width={32}
        height={24}
        strokeWidth={3}
        rotate={0}
        color='black'
        borderRadius={0}
        animationDuration={0.5}
      />
      

      
      <div >
        <h1>Cheeseburger Menu </h1>
        
        </div>

    </div>

    
        )
    }
}

export default Menu;