import React from 'react';

import './guess-form.css';
//add onsubmit
export default function GuessForm(props) {
    return (
        <form >
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off" min="1" max="100"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

