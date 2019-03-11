import React from 'react';


class ListItem extends React.Component {
  handleClick = () => {
    const { option: {id}, onClick } = this.props;
    onClick(id);
  }
  
  render(){
    const { option: { label } } = this.props;
    return (
      <li onClick={this.handleClick}>{label}</li>
    )
  }
}

export default ListItem;