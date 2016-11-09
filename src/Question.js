import React, {Component} from 'react';
import Answer from './Answer';

class Question extends Component {

  render() {
    let {title, answers} = { ...this.props.data }
    
    return (

      <article className='Question'>
        <h3>
          {title}
        </h3>
        {answers.map((answer, index) => <Answer key={index} data={answer} name={title} />)}
      </article>

    );
  }
}

export default Question;