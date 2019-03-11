import React from 'react';


class photophoto extends React.Component{
    render(){
        setTimeout(() => {
            if (!this.props.isOpen) {
                return;
            }
            const context = this.canvasElement.getContext('2d');
            context.drawImage(this.props.video, 0, 0, 640, 480);
        });
        const canvasEl = (<canvas id="canvas" width="640" height="480" className="photoCard" ref={(input) => this.canvasElement = canvas} />)
        return (
            <div className="content">
                {canvasEl}
            </div>);
    }
}

export default photophoto;