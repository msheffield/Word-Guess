/*
Javascript for Word-Guess game.
*/

var game = {
    words: [],
    wins: 0,
    loses: 0,
}

var hiddenWord = {

    word: [],

    // Initialize hidden word and display on screen
    convertWord(string) {
        word_caps = string.toUpperCase();
        word_array = word_caps.split("");
        this.word = word_array;
    }
}

var keyboard = {
    correct_keys: [],
    wrong_keys: [],

    uniqueChar(input, keyboard) {
        if (!(correct_keys.includes(input)) & !(wrong_keys.includes(input))) {
            return true;
        }
        else {
            return false;
        }
    },

    // Highlight key
    correctKey(key) {
        this.correct_keys.push(key)

        var id = "#" + key;
        $(id).css("color", "greenyellow");
    },

    // Wrong Key
    wrongKey(key) {
        this.wrong_keys.push(key)

        var id = "#" + key;
        $(id).css("color", "red");
    }

}


// GAME FUNCTIONS --------------------------------

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


// ROUND FUNCTIONS --------------------------------

// MAIN ROUND
function round(game, hiddenword, keyboard) {
    lives = 9
    win = false;

    while (lives > 0 & !win) {
        key = "H";
        if (guess(hiddenWord, key)) {
            keyboard.correctKey(key);
            return true;
        }
        keyboard.wrongKey(key);
        return false;
    }
        
}

// Does word include char
function guess(word, char) {
    if (word.includes(char)) {
        return true;
    }
    
    return false;
}


// HIDDEN WORD FUNCTIONS --------------------------------

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


// KEYBOARD FUNCTIONS --------------------------------



// TESTING --------------------------------
kb = keyboard;


// MAIN --------------------------------