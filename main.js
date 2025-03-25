/* Write a isValidPassword function 

It accepts 2 arguments: password and username 

Password must: 

- be atleast 8 characters 

- cannot contain spaces 

- cannot contain the username 

If all requirements are met, return true, 

otherwise return false */

let username = "henrik12";
let password = "henrik234";

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(" ")) {
        return false;
    }

    if (password.includes(username)) {
        return false;
    } else

    return true;
}

let result = isValidPassword(password, username);

console.log(result)