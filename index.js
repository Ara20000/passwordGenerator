let passwordBox = document.getElementById("input-section");
let length = 12;

let allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!<>?/[]#%$*&`;:";

function createPassword() {
    let password = " ";
    password+= allChars[Math.floor(Math.random() * allChars.length)];

    while(length > password.length) {
        password+= allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}
