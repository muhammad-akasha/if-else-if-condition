let inputpass = prompt("Enter Password");


specialCharacter = /[!"#$%&'()*+,-/:;<=>?@[\]^_`{|}~]/;
    
    if (inputpass.length < 7 || inputpass.length > 13 ) {

    console.log("Your Password must be between 8 and 12 characters.");

} else if (inputpass.indexOf(" ") !== -1 || inputpass.indexOf(".") !== -1) {

    console.log("Your Password must not contain spaces or dots.");

} else if (!inputpass.match(specialCharacter)) {

    console.log("You Have Atleast One Special Character In Password.");

} else {

    console.log("Sign in");

}

console.log(inputpass.length);

// 5 table using for loop..


for (let i = 5 ; i < 51 ; i = i + 5){

    console.log(i);
   
}

// 5 table reverse using while loop.

let i = 50;

while( i > 0 ){

    console.log(i)

    i =  i - 5
}






