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
            console.log('not a number reached')
            this.setState({ feedback: 'Please input a NUMBER' });
            return;
        }
        // if (((this.state.guesses).includes(guess))) {
        //     this.setState({ feedback: 'Try again, you already guessed that one!' });
        // }


    }


    render() {

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} guessSubmit={guess => this.userMakesGuess(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}
