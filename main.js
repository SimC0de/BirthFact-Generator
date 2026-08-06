// import that makes the user prompt an input
const prompt = require('prompt-sync')();

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// prompts the user to enter their birth month by name or number
let birthMonth = prompt('Enter your birth month by month name (e.g."June") or month number (e.g. "6"):').toLowerCase();

// checks if the month provided by the user is valid
let validMonth = false;
while (!validMonth) {
    // checks if parsedMonth is not a number;
    let parsedMonth = Number(birthMonth);
    if (Number.isNaN(parsedMonth)) {
        // checks if string is a valid month name
        if (!months.includes(birthMonth)) {
            birthMonth = prompt('Not a valid month name, please type the full name of the month or use a valid month number:');
        } else {
            validMonth = true;
        }
    } else {
        // checks if number is within 12 number of months
        if (months[birthMonth - 1] === undefined) {
            birthMonth = prompt('Not a valid month number, please type a valid month number or use the full name of the month:');
        } else {
            birthMonth = months[birthMonth - 1];
            validMonth = true;
        }
    }
}

