const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// write a variable without initial value
let x;
// write a variable with initial value
let x = "hello";
// write 3 variables in same line without initial value
let x, y, z;
// write 3 variables in same line with initial value
let x = "hello", y = "world", z = "!";
// write 3 variables with Boolean value
let x = false;
// write a constant
const a;
// write an empty array without initializing its size
let x = [];
// write an array of number from 1 to 10
let x = [1,2,3,4,5,6,7,8,9,10];
// write an array of strings has letters from A to J
let y = ["a","b","c","d","e","f","g","h","i","j"];
// Write an Object has at least 3 attributes (keys) and give each one a numeric value
let z = {a:1,b:2,c:3};
// write an object has at least 3 attributes (keys) and give each one a string value
let z = {a:'hi',b:'hello',c:'hola'};
// write an object has at least 3 attributes (keys) and give each one a Boolean value
let z = {a:false, b:true, c:true};
// write an object has at least 3 attributes (keys) and give each one an array value
let z = {a:[1,2,3],
         b:[2,3,4],
         c:[3,4,5]};
// write an object has at least 3 attributes (keys) and give each one an object value (object of objects)
let z = {a:{k1:1,k2:2,k3:3},
         b:{k1:'r',k2:'t',k3:'y'},
         c:{k1:'b',k2:'n',k3:'m'}};
// Write an object has at least 5 attributes (keys) and give each one different type of values including: string, number, Boolean, array, object

// Write an array of objects
let x = [{b:'g',d:'r'},
         {c:'f',v:'s'}];
// write an array of objects, and each objects is an object of objects that has an array, this array will have at least one object

// Write a function to sum two numbers passed in parameters
function sum(a,b){
    return a + b;
}
console.log(sum(2,5));
// write a function to multiply two numbers
function multi(a,b){
    return a * b;
}
console.log(multi(2,5));
// write a function to sum two numbers entered by user

function sum(a,b){
    return a + b;
}

// write a function to multiply two numbers entered by user
function multi(a,b){
    return a * b;
}
// Write a function to return a value
function re(){
    return 'returned';
}
re();
// Write a function to print a value
function pri(){
   document.write('printed') ;
}
pri();