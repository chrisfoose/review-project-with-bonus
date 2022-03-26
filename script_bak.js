// Start your code ***HERE*** =========

const password = document.getElementById("password");

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const pass = '';


// create a global variable called "pwLength" with a number between 10 and 18

const pwLength = 18;

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

function addNewPassword() {
for (let i = 0; i < pass.length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    pass += chars.substring(randomNumber, randomNumber + 1);
    };

    document.getElementById("password").value = 'pass';
};

function copyPassword() {
    const copyText = document.getElementById('password');
    copyText.select();
    document.execCommand("copy");
}

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
