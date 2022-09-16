

# Java Script

*Starting with printing hello world!*
```javascript
console.log("Hello world!");
``` 


### Variables and Data types
```javascript
var a="Nikesh";
console.log(a);
I don't recommend using var because if there is another variable with the same name that can be a conflit and cause problems in the code.

let a="Nikesh";
console.log(a);

const age= 40;
console.log(age);
Constant var cannot be overwrite.


```

*Strings, Numbers, Boolean, null, undefined*
```javascript
const name='Nikesh';
const age=20;
const rating =4.5;
const x= null;
const y =undefined;
let z;
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

```
*Concatenation*
```javascript
const name ='Nikesh';
const age ="20";
console.log("Hello I am "+ name +"and I am" + age + "years old");
```
*Template String*
```javascript
const name ='Nikesh';
const age ="20";
const myintro = `My name is ${name} and I am ${age} years old`;
```

*Strings in JavaScript*
```javascript
const a = "Nikesh Uprety"
console.log(a.substring(0,6).toUpperCase());
 
Split
const s = 'softwarica, islington, herald, texas';
console.log(s.split(', '));
```

### Arrays in JavaScript
```javascript
const devices=['Laptop','Desktop','Mobile','Printer',15];
console.log(devices);

For single sepecific output;

console.log(devices[1]);

For adding items at the end

devices.push('Router');
console.log(devices);

For adding items at the beginning

devices.unshift('Mouse');

Check Something is an Array or not,

console.log(Array.isArray())

Index of certain values

console.log(devices.indexOf('Mobile'));

```

### Loops in JavaScript
```javascript
for loops
for (let i=0; i<=10; i++ ) 
{
console.log(`The number is ${i}`);
}

while loops
let i=0;
while(i<10){
console.log(`While loop Number is ${i}`)
i++;
}
```

*froEach, map. filter*
```javascript
	const list=
	[
	{
	id:1,
	text:'Studying Networking',
	isCompleted:true
	},
	{
	id:2,
	text:'Watching Movie',
	isCompleted:true
	},
	{
	id:3,
	text:'Practising Linux',
	isCompleted:false
	}
	];

Function
	
list.forEach(function(todo){
	console.log(todo.text);
});

Map

const todolist=list.map(function(todo){
	return todo.text;
});
console.log(todolist);

filter

const listCompleted =list.filter(function(todo)){
	return listCompleted == true;
});

console.log(listCompleted);





```
### Conditional Statements 
```javascript
const x=10;

if(x == 10){
console.log('x is 10');
}
else if (x> 10){
	console.log('x is greater than 10')
{
else{
console.log('x is not equal to 10')
}

Another Example

const x=6;
const y=11;

if(x>5 && y>10){
console.log('x is more than 5 and y is more than 10')
}

Ternary Operator

const age = 18;

const Eligible = age >= 18  ? 'eligible': 'Not eligible';
console.log(eligible)

Another Example
const age = 18;

const Eligible = age >= 18  ? 'eligible': 'Not eligible';

switch(Eligible){
	case 'eligible':
		console.log('You Are eligible to vote');
		break;
	case 'Not eligible':
		console.log('You Are Not eligible to vote');
		break;
	default:
	console.log('Please Enter your correct age');
		break;
}

```
### Functions in JavaScript
```JavaScript
function addNums(num1,num2){
console.log(num1 + num2);
}
addNums(5,5);

Return type function
function addNums(num1,num2){
 return num1 + num2;
}
console.log(addNums(5,5));
```

### Interaction - (Alert, Prompt, Confirm) in JavaScript
```javascript
Alert
alert("Hello, My name is Nikesh Uprety"); - alert doesnot return anything

Prompt

let name = promt("Whats is your name?","Guest");
console.log(name);

Confirm

let exit=confirm("Do you really want to exit?");
if (exit){
console.log("You have exited successfully");
}
else{
console.log("You haven't exited successfully");
}
```
