import React from 'react';

import Photo from './Photo';

class PhotoCapture extends React.Component {
  
  state = {
    selectValue : ""
  }

handleChange(e){
    console.log("value    "  +e.target.value);
  }

  render() {
    return (

      <div>
      <select 
        value={this.state.selectValue} 
        onChange={this.handleChange} 
      >
       <option value="Orange">Orange</option>
        <option value="Radish">Radish</option>
        <option value="Cherry">Cherry</option>
      </select>
      
      </div>
    );
  }

}

export default PhotoCapture;