// Start your code ***HERE*** =========

//document.getElementById("password").value = "";

//const password = document.getElementById("password");

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable

const chars = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h'];
let passArr = [];


// create a global variable called "pwLength" with a number between 10 and 18

let pwLength = 18;

// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function

// function to clear fields

function clearFields() {
    //document.getElementById("password").value = "";
    passArr = [];
};


//function to get character length

  function charLength(numLength) {
    numLength = prompt('Please enter a value under 50 characters.', 49);
        if (numLength < 50) {
            console.log(numLength);
            pwLength = numLength;
            return numLength;    
        } else if (numLength > 50) {
            alert('Please enter a value under 50');
        };
};
charLength(); 

function addNewPassword() {
    clearFields(); //clear those fields!
    for (let i = 0; i < pwLength; i++) {
         pass = chars[Math.floor(Math.random() * chars.length)];
        passArr.push(pass);
     
}

return passArr.join(''); 
//let joinPassArr = passArr.join(' ');
   

//document.getElementById("password").value = 'pass';
    
};



/* function copyPassword() {
    const copyText = document.getElementById('password');
    copyText.select();
    document.execCommand("copy");
} */

// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
   
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======