import React from  'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Webcam from "react-webcam";


class upload extends React.Component{

  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log("from capture  " +imageSrc)
  };

    render(){
         const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

       return(
       <div> <Webcam  audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}/>;
          <button onClick={this.capture}>Capture photo</button>
          </div>
       );    
}

}



export default upload;