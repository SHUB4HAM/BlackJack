console.log('hello');
// alert('Hey, This is Shubham.');
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

// Manipulate DOM with Javascript 
/* ... It's just a Fancy way of saying
change HTML with JavaScript */

// var age = prompt('What is your age?');
// document.getElementById('someText').innerHTML = 'Hey there, my age is ' + age;

// Numbers in Javascript
var num1 = 10;
num1 = num1 + 5;
num1++;
console.log(num1);
num1--; 
console.log(10 * num1);
console.log(num1);
console.log(num1 % 2);
// console.log(num1 / )
num1 += 10;
console.log(num1);
console.log(num1/5);

// Functions
// creating a function
function fun(){
    console.log('This is a function');
}
// call the function
fun();

/* Let's create a function that take in a name
and says hello followed by your name */

function greeting(yourName){
    var result = 'Hello  ' + yourName;  // String concatenation
    console.log(result);
}
// var naam = prompt('What is your name?');
// greeting(naam);  

// How do arguments work in function?
// add two numbers in a function
function sumNum(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
sumNum(10, 40);
sumNum('Hello', ' ShubhamDhoke');

// while loop

// var num = 0;
// while(num < 100){
//     num+=10;
//     console.log(num);
// } 

// for loop

// for(let num = 0; num < 100; num++){
//     console.log(num);
// }

// Data types
// use var or let
let yourAge = 10; // number
let yourName = 'Shubham'; // String
let name = {first: 'James', last: 'Bond'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; // value null

// Strings in javaScript(common method)
let fruit = 'banana,apple,orange,guava,blackberry';
let moreFruits = 'banana\napple';  // \n - new line
console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));  // print range 
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]); // same as above
console.log(fruit.split('')); // split by character
console.log(fruit.split(',')); // split by comma

// Array 
// 2 way to define and declare array
let fruitArray = ['banana','orange','apple','pineapple'];
let fruitArr = new Array('banana','orange','apple','pineapple');

// alert(fruitArray[1]);
console.log(fruitArray[2]);
fruitArray[0] = 'Mango';
console.log(fruitArray);
for(let i=0; i<fruitArray.length; i++){
    console.log(fruitArray[i]);
}

// array common method
console.log('to string', fruitArray.toString());
console.log(fruitArray.join('*'));
console.log(fruitArray.join('-'));
console.log(fruitArray, fruitArray.pop(), fruitArray); // pop() would remove the last element of the array
console.log(fruitArray.push('blackberries'), fruitArray);
console.log(fruitArray[4]);  // undefined msg in console
fruitArray[4] = 'new fruit'; // no arraybount
fruitArray[fruitArray.length] = 'Cake';  // same as push()
console.log(fruitArray);
fruitArray.shift();  // taxing operation - remove 1st element from an array
console.log(fruitArray);
fruitArray.unshift('kiwi'); // taxing operation - add first element to an array
console.log(fruitArray);

let vegetables = ['potato', 'brinjal', 'palak', 'broccoli'];
let allGroceries = fruitArray.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort()); // sort array alphabetically

let numArray = [3,4,2,6,8,0,11,45,99];
console.log(numArray);
console.log(numArray.sort(function(a, b) {return a-b})); // sort in ascending order
console.log(numArray.sort(function(a,b) {return b-a}));  // sort in descending order
console.log(numArray);

let emptyArray = new Array();
for(let num=0; num<10; num++){
    emptyArray.push(num);
}
console.log(emptyArray); 

// objects in javascript
// dictionaries in python
let student ={
    first: 'shubham', 
    last:'dhoke',
    age: 24,
    height: 170,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
console.log(student.first);
console.log(student.last);
// student.first = 'chetan';
// console.log(student.first);
console.log(student.studentInfo());

// conditional, control flows (if else)
// 18-35 is my target demographic
// var age = prompt('what is your age?');   // let won't work with prompt
// if((age >= 10) && (age <= 35)){
//     statuss  = 'target audience';
//     console.log(statuss);
// } else{
//     statuss = 'not my audience';
//     console.log(statuss);
// }

// switch statements
// differentiate between weekday vs weekend
// Day 0 -> Sunday and Day 6 -> Saturday
switch(1){
    case 0:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    case 1:    
    case 2: 
    case 3:
    case 4:
    case 5:
        text = 'WeekDay';
        break;
    default:
        text = 'Enter valid day';        
}
console.log(text);





























