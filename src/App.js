import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Quiz from './Quiz';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: null
    };
  }

  componentDidMount() {
    axios
      .get('/quizzes')
      .then((response) => {
        this.setState({quizzes: response.data.quizzes});
      });
  }

  render() {
    let quizzes = this.state.quizzes;
    
    return (
      
      <div className="App">
        {quizzes
          ? quizzes.map(quiz => <Quiz data={quiz} key={quiz.id}/>)
          : <p>Fetching Quizzes</p>
        }
      </div>
    
    );
  }
}

export default App;
