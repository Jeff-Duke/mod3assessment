import React, { Component } from 'react';

class Answer extends Component {
  
  render() {
    let {title, score} = {...this.props.data};

    return (
      
      <label > 
        <input type='checkbox' 
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