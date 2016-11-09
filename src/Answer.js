import React, { Component } from 'react';

class Answer extends Component {
  
  render() {
    let {title, score} = {...this.props.data};

    return (
      
      <label > 
        <input type='radio'
               name={this.props.name}
               value={score}
               className='Answer'
        /> 
        {title} 
        <br/>
      </label>
      
    );
  }
}

export default Answer;