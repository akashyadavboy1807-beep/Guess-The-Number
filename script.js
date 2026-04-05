let num = Math.floor(Math.random() * 100) + 1;

let Score = 0;
let guess;

do {
    guess = prompt("Enter the number");
    guess = Number.parseInt(guess);
    
    Score++;

    if (num > guess) {
        alert("Number is greater than Your Guess")
    } else if (num < guess) {
        alert("Number is smaller than Your Guess")
    }
} while (num !== guess);

alert("Total Attempts" + " " + Score);
