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
            feedback: 'Make your guess!'
        };
    }

    userMakesGuess(guess) {
        if (typeof guess !== 'number') {
           this.setState.feedback: ('Please input a NUMBER');
        }
        if(userGuess < 0 || userGuess > 101){
            alert('please choose a number between zero and 100');
            return true;

        else if(guess === answer)

        }

    }

    guessInputHandler()

    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
