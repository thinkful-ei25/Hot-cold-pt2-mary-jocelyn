import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [10, 15, 25],
            answer: 30,
            feedback: 'Make your guess!',
            currentGuess: ''
        }
    }

    userMakesGuess(guess) {
        if (typeof guess !== 'number') {
           this.setState({ feedback:'Please input a NUMBER' });
        }
        if(guess < 0 || guess > 101){
            this.setState({ feedback:'Please choose a number between zero and 100' });
            return true;
        }
        if( (this.state.guesses).includes(guess) ){
            this.setState({ feedback:'Try again, you already guessed that one!'});
            
        } 
        if(guess === this.state.answer){
            this.setState({ feedback:'You guessed it! You win!'})

        } else {
            this.state.guesses.push(guess);
        
        }
        
    }
// setState(currentGuess: {guess})
    // guessInputHandler()

    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback}  guessSubmit={guess => this.userMakesGuess(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
