import React, { Component } from 'react';

class Answer extends Component {
  
  render() {
    let {title, score} = {...this.props.data};

    return (
      
      <label className='Answer'> 
        <input type='checkbox' 
               value={score}
        /> 
        {title} 
        <br/>
      </label>
      
    );
  }
}

export default Answer;