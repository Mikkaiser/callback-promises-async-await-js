//What's a callback ----------------------------------------------------------------

const fs = require('fs');

//Here, a callback function is declared (whatever the name).

// const callback = (err, content) => {
//   console.log(err, String(content));
// }

//Here, the callback function is called.
//While the main function is executed, the callback is not called.
//And, after the execution, the callback function is called.

// fs.readFile('./text.txt', callback);

// //The method's execution give your output as last process on console. 

// console.log(1);
// console.log(2);
// console.log(3);

//The Promise ----------------------------------------------------------------

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, content) => {
    if(err) {
      reject(err);
    }
    else {
      resolve(content)
    }
  });
});


//Chaining Promises
// readFile('text.txt').then(content => {
//   return content;
// })
// .then(content => {
//   console.log(content);
// });


//async/await ----------------------------------------------------------------

//async is, actually, a promise 
const init = async () => {
  const content = await readFile('text.txt');
  console.log(content);
}

//async function can provide to your code high maintainability, because the syntax becomes more clean

console.log(1);
init();
console.log(2);
console.log(3);
