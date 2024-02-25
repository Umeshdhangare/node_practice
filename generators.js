
// function* foo() {
//     yield 'a';
//     yield 'b';
//     yield 'c';
// };
  
// let str = '';
//   for (const val of foo()) {
//     str = str + val;
//   }
// let iter = foo();
// str = str + iter.next().value;
// str = str + iter.next().value;
// str = str + iter.next().value;
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(str);

// function *fetchUsers(){
//     yield new Promise((resolve, reject) => {
//         resolve("Umesh");
//     });
// }

// let users = fetchUsers();

// users.next().value.then((resp) => console.log(resp));

function *infinte(index){
    // let index = 0;

    while(true){
        
    }
}

let generator1 = infinte(0);
while(true){
    
}
// let generator2 = infinte(20);
// console.log(generator1.next().value);
// console.log(generator2.next().value);
// console.log(generator1.next().value);
// console.log(generator2.next().value);