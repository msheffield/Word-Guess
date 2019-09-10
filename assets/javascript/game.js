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

var hiddenWord = {

    word: [],

    // Initialize hidden word and display on screen
    convertword(string) {
        word_caps = string.toUpperCase();
        word_array = word_caps.split("");
        this.word = word_array;
    },
}

var keyboard = {
    correct_keys: [],
    wrong_keys: [],
}

// GAME FUNCTIONS //

// Generator a random word - Recursive if word has been used or if word is longer than 12 letters
function wordGen(pastWords) {
    //place holder for random word gen
    word = "hello";

    /* if (pastWords.includes(word)) {
        wordGen(pastWords);
    } */

    /* if (length(word) > 12) {
        wordGen(pastWords);
    } */

    return word;
}

// ROUND FUNCTIONS //

// Check to see if char has been guessed before
function uniquehar(input, keyboard) {
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

// HIDDEN WORD FUNCTIONS //

// Create divs
function createPlaceholders(word) {
    var row = document.getElementById("hidden-word");
    
    for (i=0; i < word.length; i++) {
        var newDiv = document.createElement("h2");
        newDiv.textContent = "_";
        newDiv.setAttribute("class", "col-md-1 hidden-char");
        newDiv.setAttribute("id", "hidden_" + word[i])
        row.appendChild(newDiv);
    }
}

// Reveal char
function revealChar(char) {
    var hidden = document.getElementById("hidden_" + char);
    hidden.textContent = char;
}


//KEYBOARD FUNCTIONS //






// MAIN //
var hidden = hiddenWord;
hidden.convertword("hello");
createPlaceholders(hidden.word);
revealChar("H")