/*
Javascript for Word-Guess game.
*/

var game = {
    words: [],
    wins: 0,
    loses: 0,

    startRound: function () {
        word = wordGen(this.words);
        this.words.push(word)

        correct_guesses = [];
        wrong_guesses = [];

        while ((correct_guesses.length < word.length) & (wrong_guesses.length < 9)) {
            document.onkeyup(event)
            input = event.key.toUpperCase();
            if (uniquechar(input, correct_guesses, wrong_guesses) & guess(word, input)) {
                correct_guesses.push(input);
                console.log(input + " is in word")
            }
            else {
                wrong_guesses.push(input);
                console.log(input + " is not in word")
            }
        

        }

        if (correct_guesses.length = word.length) {
            this.wins++;
        }
        else {
            this.loses++;
        }
    }
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