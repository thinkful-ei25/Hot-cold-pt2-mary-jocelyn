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
            answer: 21,
            feedback: 'Make your guess!',
            currentGuess: ''
        }
    }

    userMakesGuess(guess) {
        this.setState({answer:Math.floor((Math.random() * 100) + 1)})
        if (typeof guess !== 'number') {
            console.log('not a number reached')
            this.setState({ feedback: 'Please input a NUMBER' });
            return;
        }
        if (this.state.guesses.includes(guess)) {
            this.setState({ feedback: 'Try again, you already guessed that one!' });
            return;
        }
        const difference = Math.abs(guess-this.state.answer)
        let feedback;

        if(difference >= 50){
            feedback = "You are ICE cold"
        }else if (difference >= 30){
            feedback = "You're just cold now"
        }else if (difference >= 10){
            feedback = "you're warm!"
        }else if (difference >= 1){
            feedback = "HOT!"
        }else {
            feedback = "you did it!"
        }

        this.setState({feedback:feedback, guesses:[...this.state.guesses, guess]})
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
