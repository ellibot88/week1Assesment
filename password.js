//Code from calculator question
// const readline = require("readline");

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// reader.question("What would you like to calculate?", function (input) {
//   tokens = input.split(" ");

//   //parse out numbers and math operator from input
//   mathSymbol = tokens[0];
//   num1 = Number(tokens[1]);
//   num2 = Number(tokens[2]);
//   num3 = Number(tokens[3]);

//   console.log("mathSymbol", mathSymbol);
//   console.log("num1", num1);
//   console.log("num2", num2);
//   console.log("num2", num3);

//   //conditional logic to determine math operator
//   if (mathSymbol === "+") {
//     console.log(num1 + num2 + num3);
//   } else if (mathSymbol === "-") {
//     console.log(num1 - num2 - num3);
//   } else if (mathSymbol === "*") {
//     console.log(num1 * num2 * num3);
//   } else if (mathSymbol === "/") {
//     console.log(num1 / num2 / num3);
//   } else if (mathSymbol === "sqrt") {
//     //console.log(num1 * num1)
//     console.log(Math.sqrt(num1));
//     console.log(Math.sqrt(num2));
//     console.log(Math.sqrt(num3));
//     //console.log(num2 * num2)
//   } else {
//     console.log("Unable to calculate");
//   }

//   // This line closes the connection to the command line interface.
//   reader.close();
// });

//SOLUTION
//-----------------------------------------------------------------------------------------------------------------

const art = `/\\\\\\\\ /\\ /\\               /\\    /\\        /\\                                                         /\\
/\\       /\\ /\\ /\            /\\    /\\        /\\                                                         /\\
/\\       /\\ /\\      /\\    /\/\ /\/\/\ /\      /\\         /\\       /\\    /\\ /\\     /\\    /\ /\\\     /\\
/\\\\\\   /\\ /\\/\\ /\\  /\\   /\\    /\\        /\\       /\   /\\  /\\  /\\  /\\  /\\ /\\  /\\  /\\    /\\ /\\
/\\       /\\ /\\/\\/\\    /\\  /\\    /\\        /\\      /\\\\\ /\\/\\    /\\ /\\  /\\/\\   /\\  /\\   /\   /\\
/\\       /\\ /\\/\\ /\\  /\\   /\\    /\\        /\\      /\         /\\  /\\  /\\  /\\/\\   /\\  /\\   /\   /\\
/\\\\\\\\/\\\/\\\/\\   /\\       /\\    /\\       /\\\\\\\\  /\\\\      /\\    /\\\  /\\  /\\ /\\\/\\\    /\\ /\\`;
const readline = require("readline");
let text =
  "Welcome! Please enter a password (must be at least 10 characters long, must not contain leading or trailing white spaces, start with an uppercase letter, and contain '!' at the end ";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let test = () => {
  reader.question(text, function (input) {
    password = input;

    if (password.length < 10) {
      console.log("ERROR: password must be at least 10 character long");
      text = "Please try again ";
      test();
    } else if (password.trim() !== password) {
      console.log("ERROR: password cannot contain white spaces");
      text = "Please try again ";
      test();
    } else if (password.endsWith("!") === false) {
      console.log("ERROR: password must end with '!'");
      text = "Please try again ";
      test();
    } else if (password[0].toUpperCase() !== password[0]) {
      console.log("Error: first character must be uppercase");
      text = "Please try again ";
      test();
    } else {
      console.log("SUCCESS: password successfully saved");
      result = true;
      console.log(art);
      reader.close();
    }
  });
};

test();
