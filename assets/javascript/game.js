/*
Javascript for Word-Guess game.
*/

var game = {
    words: [],
    wins: 0,
    loses: 0,
    

}

document.onkeyup = function(event) {
    input = event.key.toUpperCase();
}


function uniquechar(input, array1, array2) {
    if (!(array1.includes(input)) & !(array2.includes(input))) {
        return true;
    }
    else {
        return false;
    }
}


function wordGen(pastWords) {
    word = "hello";
    return word;
}


function guess(word, char) {
    if (word.includes(char)) {
        return true;
    }
    else {
        return false;
    }
}


game = game;

//game.startRound()