import React, {Component} from 'react';
import Answer from './Answer';

class Question extends Component {

  render() {
    let {title, answers} = { ...this.props.data }

    return (

      <article className='Question'>
        <p>
          {title}
        </p>
        {answers.map((answer, index) => <Answer key={index} data={answer}/>)}
      </article>

    );
  }
}

export default Question;