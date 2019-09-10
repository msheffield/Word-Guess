/*
Javascript for Word-Guess game.
*/

var game = {
    wins: 0,
    loses: 0,
    lives: 9,
}

var hiddenWord = {

    word: [],
    pastWords: [],

    // Generator a random word - Recursive if word has been used or if word is longer than 12 letters
    wordGen() {
        //place holder for random word gen
        newWord = "hello";
    
        this.pastWords.push(newWord);
        
        this.word = convertWord(newWord);
    },
}

var keyboard = {
    correct_keys: [],
    wrong_keys: [],
    letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

    validChar(input) {
        if (this.letters.includes(input)) {
            return true;
        }
        alert("Invalid key");
        return false;
    },

    uniqueChar(input) {
        if (!(this.correct_keys.includes(input)) & !(this.wrong_keys.includes(input))) {
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
    },

    clear() {
        this.correct_keys.forEach(function(element) {
            var id = "#" + element;
            $(id).css("color", "black");
        })
        this.correct_keys = [];
        this.wrong_keys.forEach(function(element) {
            var id = "#" + element;
            $(id).css("color", "black");
        })
        this.wrong_keys = [];
    }

}

// GAME FUNCTIONS --------------------------------

// Does word include char
function guess(char, game, hiddenword, keyboard) {
    if (keyboard.validChar(char) & keyboard.uniqueChar(char)) {
        if (hiddenword.word.includes(char)) {
            keyboard.correctKey(char);
            revealChar(char);
        }
        else {
            keyboard.wrongKey(char);
            game.lives -= 1;
        }
    }
}

function update(game, hiddenword, keyboard) {
    if (game.lives = 0) {
        game.loses += 1;
        reset(hiddenword,keyboard);
    }
    else if (keyboard.correct_keys.length == hiddenword.word.length) {
        game.wins += 1;
        reset (hiddenword,keyboard);
    }
}

function reset(hiddenword, keyboard) {
    hiddenword.wordGen();
    keyboard.clear();
}


// HIDDEN WORD FUNCTIONS --------------------------------

// Initialize hidden word and display on screen
function convertWord(string) {
    word_caps = string.toUpperCase();
    word_array = word_caps.split("");
    return word_array;
}

// Create divs
function createPlaceholders(word_array) {
    var row = document.getElementById("hidden-word");
    
    for (i=0; i < word_array.length; i++) {
        var newDiv = document.createElement("h2");
        newDiv.textContent = "_";
        newDiv.setAttribute("class", "col-md-1 hidden-char");
        newDiv.setAttribute("id", "hidden_" + word_array[i])
        row.appendChild(newDiv);
    }
}

// Reveal char
function revealChar(char) {
    var hidden = document.getElementById("hidden_" + char);
    hidden.textContent = char;
}


// TESTING --------------------------------


// MAIN --------------------------------
game = game;
hw = hiddenWord;
kb = keyboard;

hw.wordGen();
createPlaceholders(hw.word);

guess("H", game, hw, kb)
guess(".", game, hw, kb)