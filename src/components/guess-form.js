import React from 'react';

import './guess-form.css';
//add onsubmit
export default function GuessForm(props) {
    return (
        <form onSubmit={(e) =>{
            e.preventDefault()
            console.log('clicked')
            console.log(e.target.userGuess.value)
            props.guessSubmit(parseInt(e.target.userGuess.value))}}>
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off" min="1" max="100"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

