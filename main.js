// import that makes the user prompt an input
const prompt = require('prompt-sync')();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// prompts the user to enther their birth month by name or number
const birthMonth = prompt('Enter your birth month by month name (e.g."June") or month number (e.g. "6"):');

const parsedMonth = Number(birthMonth);

if (Number.isNaN(parsedMonth)) {
    console.log("Not a number");
} else {
    console.log("Is a number");
}