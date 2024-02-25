const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();
const Animal = require("./models/animals");
const EventEmitter = require("events");

// const db = config.get('mongoURI');
app.use(express.json());

// const db = "mongodb+srv://test_user:VEUysG61oD4FO2Ka@cluster0.qvlkilj.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(db)
// .then(() => console.log("MongoDB connected!"))
// .catch((err) => console.log(err));

// const newAnimal = new Animal({
//     name: 'Polar Beer',
//     isEndangered: false
// });

// // newAnimal.save();

// Animal.findByIdAndDelete("64c0cfc1076b7e71b28df714")
// .then(() => console.log('Item deleted'))
// .catch(err => console.log(err));

// app.get('/', (req, res) => {
//     Animal.find()
//     .then((items) => console.log(res.json(items)))
//     .catch(err => console.log(err));
// })

// const myEmitter = new EventEmitter();
// myEmitter.on('one', () => {
//     console.log("First Event");
// })
// myEmitter.emit('one');

// app.get('/', (req,res) => {
//     res.send('<h1>Hello World</h1>');
// })

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server listning on http://localhost:${port}`);
// })

// let value = 1;
// let doSomething = () => {}
// doSomething(() => {
//   value = 2;
// });
// console.log(value); // 1 or 2?

// let promise = new Promise((resolve, reject) => {
//     resolve(1);
// });
// promise.then(() => console.log("after 1 second"))
// .catch(err => console.log(err));
// Promise.resolve().then(() => console.log('Hi'));
// console.log(promise);

// console.log(Promise.reject().then(value => console.log(value)).catch(err => console.error(err)).finally(() => console.log("Completed")));

// let p = Promise.all([1, ,2]);

// console.log(p);

// setTimeout(() => {
//     console.log(p)
// });

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(200);
//     }, 1000)
// })
// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve(400);
//     }, 0)
// })
// let p4 = Promise.race([p1, p2, Promise.reject(404)]);
// console.log(p4);
// setTimeout(() => {
//     console.log(p4)
// });

// const THRESHOLD_A = 8; // can use zero 0 to guarantee error

// function tetheredGetNumber(resolve, reject) {
//   setTimeout(() => {
//     const randomInt = Date.now();
//     const value = randomInt % 10;
//     if (value < THRESHOLD_A) {
//       resolve(value);
//     } else {
//       reject(`Too large: ${value}`);
//     }
//   }, 500);
// }

// function determineParity(value) {
//   const isOdd = value % 2 === 1;
//   return { value, isOdd };
// }

// function troubleWithGetNumber(reason) {
//   const err = new Error("Trouble getting number", { cause: reason });
//   console.error(err);
//   throw err;
// }

// function promiseGetWord(parityInfo) {
//   return new Promise((resolve, reject) => {
//     const { value, isOdd } = parityInfo;
//     if (value >= THRESHOLD_A - 1) {
//       reject(`Still too large: ${value}`);
//     } else {
//       parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
//       resolve(parityInfo);
//     }
//   });
// }

// new Promise(tetheredGetNumber)
//   .then(determineParity, troubleWithGetNumber)
//   .then(promiseGetWord)
//   .then((info) => {
//     console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
//     return info;
//   })
//   .catch((reason) => {
//     if (reason.cause) {
//       console.error("Had previously handled error");
//     } else {
//       console.error(`Trouble with promiseGetWord(): ${reason}`);
//     }
//   })
//   .finally((info) => console.log("All done"));
// function executor(resolveFunc, rejectFunc)  {
//     resolveFunc(200);
//     rejectFunc(404);
// }
// let p = new Promise(executor)

// p.then(value => console.log(value))
// .catch(err => console.log(err));

// const promises = [Promise.resolve(404), Promise.resolve(400), Promise.resolve(200)];
// let p1 = Promise.all(promises);
// let p2 = Promise.allSettled(promises);
// // let p3 = Promise.any(promises);
// let p4 = Promise.race(promises);

// setTimeout(() => {
//     console.log(p1);
//     // console.log(p2);
//     // console.log(p3);
//     // console.log(p4);
// })

const superHero = require("./batman");
const add = require("./calculator");

// console.log(`SuperHero : ${superHero.superHero}`);

setTimeout(() => {
	console.log("First");
}, 0);
console.log("Second");

// console.log(add([1, 2]));
// app.listen(3000, () => {
// 	console.log(`Listning on port: 3000`);
// });
