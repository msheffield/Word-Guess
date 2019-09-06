/*
Javascript for Word-Guess game.
*/

var game = {
    word: "hello",
    correct_guesses: [],
    wrong_guesses: [],

    guess: function(char) {
        if (this.word.includes(char)) {
            console.log(char + " in word")
            this.correct_guesses.push(char);
        }
        else {
            this.wrong_guesses.push(char)
            console.log(char + " not in word")
        }
    }
}

game = game;

game.guess("a");
game.wrong_guesses.forEach(element => {
    console.log(element);
});