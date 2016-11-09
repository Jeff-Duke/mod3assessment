import React, {Component} from 'react';
import Question from './Question';

class Quiz extends Component {

  render() {
    let {title, questions} = { ...this.props.data }

    return (

      <section className='Quiz'>
        <p>
          {title}
        </p>
        {questions.map(question => <Question key={question.id} data={question}/>)}
      </section>

    );
  }
}

export default Quiz;