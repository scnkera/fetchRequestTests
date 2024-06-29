// Naive delay example: (NOT HOW IT WORKS!)
console.log('First!')
delay(1000)
console.log('Second!')


// Real way:
console.log('First!')
setTimeout(() => {
  console.log('Second!')
}, 1000)

// more code


console.log('First!')
setTimeout(() => {
  console.log('Second!')
  setTimeout(() => {
    console.log('Third!')
    setTimeout(() => {
      console.log('Fourth!')
    }, 1000)
  }, 1000)
}, 1000)





// Step 1:
const response = fetch('http://careersincode.xyz/fruit', {
    method: 'GET',
    headers: {}
});

// THIS WON'T WORK!
// while (!response.stuffInBox) {
//     // Wait here
// }
// const data = response.getStuffInBox();

// THIS WILL WORK:
response.then(() => {
    console.log('There is stuff in the box!', response);
});