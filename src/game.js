import React from 'react';

import Header from './header';
import GuessSection from './guess';
import StatusSection from './status';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Let\'s Go!',
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
  }

  makeGuess(guess) {
    guess = parseInt(guess, 10);
    

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
     if (difference >= 30) {
      feedback = 'Cold';
    } else if (difference >= 1) {
      feedback = 'Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
    document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  }


  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.makeGuess(guess)}
          />
          <StatusSection guesses={guesses} 
          />
        </main>
      </div>
    );
  }
}
