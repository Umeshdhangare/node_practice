let EventEmitter = require('events');
let eventEmitter = new EventEmitter();
const path = require('path');
const fs = require('fs');

// const baz = () => console.log('baz');
// const foo = () => console.log('foo');
// const zoo = () => console.log('zoo');
// const start = () => {
//   console.log('start');
//   setImmediate(baz);
//   new Promise((resolve, reject) => {
//     resolve('bar');
//   }).then((resolve) => {
//     console.log(resolve);
//     process.nextTick(zoo);
//   });
//   process.nextTick(foo);
// };
// start();

// eventEmitter.on('start', (time) => {
//     console.log(`Started ${time}`);
// })

// eventEmitter.emit('start', 10);

// let file = "C:\\Users\\user\\Desktop\\Umesh\\DisjoinSet.txt";
// console.log(path.dirname(file));

// async function example(){
//     let filehandle;

//     try{
//         filehandle = await fs.open(__dirname + '\\test.txt', 'r');
//         console.log(filehandle.fd);
//     }
//     finally{
//         if(filehandle) await filehandle.close();
//     }
// }

// example();
// const content = 'Writing test!';
// try {
//     let file = path.join(__dirname , 'test.txt');
//     // const data = fs.readFileSync(file);
//     // fs.writeFileSync(file, content);
//     fs.appendFileSync(file, "This is append to the content");
//     // console.log(data);
//   } catch (err) {
//     console.error(err);
//   }



// Event Loop

// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   const filePath = path.join(__dirname, 'test.txt');
//   fs.readFileSync(filePath, callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });
// async function Example(){
//     try{
//         setTimeout(() => {
//             console.log("Hi");
//         }, 1000);
//         console.log("hi");
//         // console.log(s());
//     }
//     catch(err){

//     }
// }
// Example();
// console.log("Down");


// Promises
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve({
            name: "Umesh",
            admin: false
        });
    }, 1000);
    
})
// const promise2 = new Promise((resolve, reject) => {
//     return resolve(10);
// });
// const promise3 = new Promise((resolve, reject) => {
//     return reject({
//         status: "failed",
//         err: "This is failed promise"
//     });
// })

// Promise.allSettled([
//     promise1,
//     promise2,
//     promise3
// ])
// .then((values) => {
//     console.log(values);
//     // console.log(second);
//     // console.log(third);
// })
// .catch((err) => {
//     console.log(err);
// })

// promise1
// .then((value) => {
//     console.log(value);
//     return promise2;
// })
// .then((value) => {
//     console.log(value);
//     return promise3;
// })
// .then((value)=> console.log(value))
// .catch((err) => console.log(err));

// promise1
// .then((value) => console.log(value))
// .catch((err) => console.log(err));

// setTimeout(() => console.log(10), 1000);


let s = "Iam";
s += "Umesh";

console.log(s)