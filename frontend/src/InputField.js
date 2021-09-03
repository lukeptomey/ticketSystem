import React from 'react';
import UserStore from './stores/UserStore';
import './App.css';

class InputField extends React.Component{
  render(){

  return (
    <div className="inputField">
      <input
          className='input'
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e.target.value)}
      >
      </input>
    </div>
  );
  }
}


export default InputField;
