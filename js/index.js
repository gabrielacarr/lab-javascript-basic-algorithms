// Iteration 1: Names and Input


let hacker1 = "Brie";
console.log(`The driver's 
name is ${hacker1}`);
let hacker2 = "Gabriela";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals


if (hacker.length >hacker2.length) {
  console.log(
    `The driver has the longest name. It has ${hacker1.length} characters.`
);
} else {
   console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

switch (true) {
  case hacker1.length > hacker2.length:
    console.log(
      `The driver has the longest name. It has ${hacker1.length} characters.`
    );
    break;
  case hacker1.length < hacker2.length:
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
    break;
  default:
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// let driver = [];
// for(let i=0; i<hacker1.length; i++){
//   driver.push(hacker1[i])
// }

console.log(  hacker1.split('').join(' ').toUpperCase())

console.log('3.2 Print all the characters of the navigators name, in reverse order. i.e. "nhoJ"')

let navigatorReverse = []
for(let i=hacker2.length-1; i>=0; i--){
  console.log(i)
  navigatorReverse.push(hacker2[i])
}

console.log(navigatorReverse.join(''))
