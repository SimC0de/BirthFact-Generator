// import that makes the user prompt an input
const prompt = require('prompt-sync')();

const currentYear = new Date().getFullYear();
const months = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"];

let birthYear = Number(prompt('Enter your birth year:'));
let userAge = currentYear - birthYear;

if (userAge <= 12 || userAge >= 80) {
    console.log("Not gonna lie, your birth year is not within the age demographic that this project is targeting... but I'll let you keep using it");
}

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
            birthMonth = prompt('Not a valid month name, please type the full name of the month or use a valid month number:').toLowerCase();
        } else {
            birthMonth = months.indexOf(birthMonth);
            validMonth = true;
        }
    } else {
        // checks if number is within 12 number of months
        if (months[birthMonth - 1] === undefined) {
            birthMonth = prompt('Not a valid month number, please type a valid month number or use the full name of the month:').toLowerCase();
        } else {
            birthMonth = birthMonth - 1;
            validMonth = true;
        }
    }
}

const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let birthDay = Number(prompt('Enter your birth day:'));
validMonthDay = false;
while (!validMonthDay) {
    if ((birthDay === 29) && (birthMonth === 1)) {
        birthDay = Number(prompt('Not a valid birth day for the month, unless it\'s the leap year... which I haven\'t configured yet, stick to 28 or less days for now:'));
        console.log(months[birthMonth])
    } else if ((birthDay > daysInMonths[birthMonth]) || (birthDay < 0)) {
        birthDay = Number(prompt('Not a valid birth day for the month, please enter a valid one:'));
        console.log(months[birthMonth])
    } else {
        validMonthDay = true;
    }
}

function zodiacConstellation(month, day) {
    const constellations = [
        "Aries", "Taurus", "Gemini", "Cancer",
        "Leo", "Virgo", "Libra", "Scorpius",
        "Sagittarius", "Capricornus", "Aquarius", "Pisces"]
    let constellation = "";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        constellation = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        constellation = "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        constellation = "Gemini";
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        constellation = "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        constellation = "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        constellation = "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        constellation = "Libra";
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        constellation = "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        constellation = "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        constellation = "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        constellation = "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        constellation = "Pisces";
    }

    return `Your Zoadiac Sign is ${constellation}`;
}

function chineseZodiac(year) {
    const animals = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
        "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
    ];

    const index = (year - 4) % 12;
    const animal = animals[index < 0 ? index + 12 : index];
    return `Your Chinese Zodiac sign is year of the ${animal}`;
}



const randomFact = [chineseZodiac(birthYear),];

console.log(randomFact[Math.floor(Math.random() * randomFact.length)]);
console.log(zodiacConstellation(birthMonth, birthDay));

