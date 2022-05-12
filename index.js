let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
const generatePasswordBtn = document.querySelector('#generate-password-btn');
const firstPassword = document.querySelector('#first-password');
const secondPassword = document.querySelector('#second-password');
const thirdPassword = document.querySelector('#third-password');
const fourthPassword = document.querySelector('#fourth-password');

let passwordSize = document.querySelector('#output');
let numberPassword = 0;
let auxPassword = "";

//value 1 is the first password
// value 2 is the second password
// value 3 is the third password
// value 4 is the fourth password
//for passwordCopyed
let passwordCopyed = 0;

function generateRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
}

generatePasswordBtn.addEventListener("click", function () {
    let passwordArray = [];
    let passwordHolder = '';

    while (numberPassword < 4) {
        for (let i = 0; i < passwordSize.value; i++) {
            passwordHolder += generateRandomCharacter();
        }
        passwordArray.push(passwordHolder);
        passwordHolder = '';
        numberPassword++;
    }
    numberPassword = 0;
    displayPasswords(passwordArray);
})

function displayPasswords(passwordArray) {
    firstPassword.textContent = passwordArray[0];
    secondPassword.textContent = passwordArray[1];
    thirdPassword.textContent = passwordArray[2];
    fourthPassword.textContent = passwordArray[3];
}



firstPassword.addEventListener("click", function () {
    navigator.clipboard.writeText(firstPassword.textContent);
    auxPassword = firstPassword.textContent;
    firstPassword.textContent = "Copied";
    passwordCopyed = 1;
});

firstPassword.addEventListener("mouseleave", function () {
    if (passwordCopyed == 1) {
        firstPassword.textContent = auxPassword;
    }
    passwordCopyed = 0;
})

secondPassword.addEventListener("click", function (en) {
    navigator.clipboard.writeText(secondPassword.textContent);
    auxPassword = secondPassword.textContent;
    secondPassword.textContent = "Copied";
    passwordCopyed = 2;
});

secondPassword.addEventListener("mouseleave", function () {
    if (passwordCopyed == 2) {
        secondPassword.textContent = auxPassword;
    }
    passwordCopyed = 0;
})

thirdPassword.addEventListener("click", function (en) {
    navigator.clipboard.writeText(thirdPassword.textContent);
    auxPassword = thirdPassword.textContent;
    thirdPassword.textContent = "Copied";
    passwordCopyed = 3;
});

thirdPassword.addEventListener("mouseleave", function () {
    if (passwordCopyed == 3) {
        thirdPassword.textContent = auxPassword;
    }
    passwordCopyed = 0;
})

fourthPassword.addEventListener("click", function (en) {
    navigator.clipboard.writeText(fourthPassword.textContent);
    auxPassword = fourthPassword.textContent;
    fourthPassword.textContent = "Copied";
    passwordCopyed = 4;
});

fourthPassword.addEventListener("mouseleave", function () {
    if (passwordCopyed == 4) {
        fourthPassword.textContent = auxPassword;
    }
    passwordCopyed = 0;
})


