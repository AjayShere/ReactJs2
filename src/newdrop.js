import React from 'react';

class newdrop extends React.Component{
    onChangeOption(e){
        if (e.detail === 0){
            console.log(e.target.value);
        }
    }
    render(){
        return (
            <select name="select1" onClick={this.onChangeOption}>
                <option value='A'>Please select A...</option>
                <option value='B'>Please select B...</option>
                <option value='C'>Please select C...</option>
                <option value='D'>Please select D...</option>
            </select>
        )
    }
}

export default newdrop;