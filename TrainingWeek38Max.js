/*
    Hello.
    This is a problem set for you to work on
    The idea is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change the provided code unless the task specifically says you should.
*/

/*
    Task: Example
    Write the code to print all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/*
    Task: A
    Create variables for:
    * Hours in a day
    * Minutes in an hour
    * Seconds in a minute
    * The ratio between water and juice when mixing juice
    * Days until your birthday
    * Millimeters of rain that falls
*/
console.log("Task: A");

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_A_HOUR = 60;
const SECONDS_IN_A_MINUTE = 60;
const WATER_TO_JUICE_RATIO = 9 / 1;
let daysUntilMyBirthday = 231;
let millimeterOfRainFallen = 4;
console.log(HOURS_IN_A_DAY)
console.log(MINUTES_IN_A_HOUR)
console.log(SECONDS_IN_A_MINUTE)
console.log(WATER_TO_JUICE_RATIO)
console.log(daysUntilMyBirthday)
console.log(millimeterOfRainFallen)

/*
    Task: B
    Use your variables (do not redefine them) from task A and calculate:
    * How many seconds are in 2.5 hours?
    * How many minutes are in 123 days?
    Remember to assign the answers to their own variables.
    Example:
    // How many deciliters are in 4.5 cups?
    const dlInCups = 2.36588;
    const amountOfDL = dlInCups * 4.5;
*/
console.log("Task: B");

const SECONDS_IN_A_HOUR = SECONDS_IN_A_MINUTE * MINUTES_IN_A_HOUR;
const SECONDS_IN_TWO_AND_A_HALF_HOURS = SECONDS_IN_A_HOUR * 2.5;
console.log(SECONDS_IN_TWO_AND_A_HALF_HOURS);

const MINUTES_IN_A_DAY = MINUTES_IN_A_HOUR * HOURS_IN_A_DAY;
const MINUTES_IN_123_DAYS = MINUTES_IN_A_DAY * 123;
console.log(MINUTES_IN_123_DAYS);

/*
    Task: C
    Use a loop (for) to print the numbers from 1 to 10.
*/
console.log("Task: C");

for (let index = 0; index < 10; index ++){
    console.log(index + 1);
}

/*
    Task: D
    Use a loop (for) to print the numbers from 10 to 1.
*/
console.log("Task: D");

for (let index = 10; index > 0; index --){
    console.log(index);
}

/*
    Task: E
    This one is a bit more difficult, but you can do it ;)
    Use a loop (for) to print the even numbers between 1 and 100.
*/
console.log("Task: E");

for (let index = 2; index <= 100; index += 2){
    console.log(index);
}

/*
    Task: F
    Use a while loop to print all the numbers from 0 to 100;
*/
console.log("Task: F");

let number = 0

while (number <= 100) {
    console.log(number);
    number++;
}

/*
    Task: G
    Fill in the code needed to make the following code print the expected result.
*/
console.log("Task: G");

const DICTIONARY_ML = {
    no: {
        hello: "Hello there",
        howAreYou: "How are you doing?"
    },
    en: {
        hello: "Hi",
        howAreYou: "how are you?",
        goodQuestionsLatly: "Gotten any good questions lately?"
    }
};

const DICTIONARY = DICTIONARY_ML;

console.log(`${DICTIONARY.en.hello} Christian, ${DICTIONARY.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY.en.goodQuestionsLatly}`); //-> Gotten any good questions lately?