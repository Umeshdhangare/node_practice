// const mongoose = require('mongoose');

// const kittySchema = new mongoose.Schema({
//     name: String
// })

// kittySchema.methods.speak = function speak(){
//     const greeting = this.name ? `Meow name is ${this.name}` : 'I don\'t have a name';
//     console.log(greeting);
// }
// const Kitten = mongoose.model('Kitten', kittySchema);
// const fluffy = new Kitten({name: 'fluffy'});

// fluffy.speak();
// console.log(fluffy.name);

// require("./batman");

const fs = require("fs");

// const readStream = fs.createReadStream(__filename);
// readStream.close();

// readStream.on("close", () => console.log("Close queue"));

fs.readFile(__filename, () => {
	console.log("I/O queue 1");
	Promise.resolve().then(() => {
		console.log("promise 1");
	});
});

fs.readFile(__filename, () => {
	console.log("I/O queue 2");
	Promise.resolve().then(() => console.log("promise 2"));
});

for (let i = 0; i < 1000000000; i++) {}
