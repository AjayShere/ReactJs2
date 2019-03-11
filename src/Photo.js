import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

class Photo extends React.Component {
   constructor() {
    super();
    this.deleteAccount = this.deleteAccount.bind(this);
    this.logout = this.logout.bind(this);
  }

  deleteAccount(e) {
    console.log("Deleting Account")
  }

  logout(e) {
    console.log("Logging out")
  }
  
  render() {
    
 
  return (
    <DropdownMenu>
        <MenuItem text="Home" location="/home" />
        <MenuItem text="Edit Profile" location="/profile" />
        <MenuItem text="Change Password" location="/change-password" />
        <MenuItem text="Privacy Settings" location="/privacy-settings" />
        <MenuItem text="Delete Account" onClick={this.deleteAccount} />
        <MenuItem text="Logout" onClick={this.logout} />
      </DropdownMenu>
  );
}
}

export default Photo;

