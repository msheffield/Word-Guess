/*
Javascript for Word-Guess game.
*/

var game = {
    words: [],
    wins: 0,
    loses: 0,
}

var round = {
    lives: 9,
}

var keyboard = {
    correct_keys: [],
    wrong_keys: [],
}

// GAME FUNCTIONS //

// Generator a random word, check if word has been used before (if not then recursion)
function wordGen(pastWords) {
    //place holder for random word gen
    word = "hello";

    /* if (pastWords.includes(word)) {
        wordGen(pastWords);
    } */

    return word;
}

// ROUND FUNCTIONS //

// Check to see if char has been guessed before
function uniquechar(input, keyboard) {
    if (!(keyboard.correct_keys.includes(input)) & !(keyboard.wrong_keys.includes(input))) {
        return true;
    }
    else {
        return false;
    }
}

// Does word include char
function guess(word, char) {
    if (word.includes(char)) {
        return true;
    }
    else {
        return false;
    }
}

//KEYBOARD FUNCTIONS //






// MAIN //