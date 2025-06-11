console.log("Hello Qlith Innovation")

console.log(1 !== "1");

// let is="true";
console.log(true !== "true");

console.log("a"-1);
console.log('10'-'4'-'3'-2 + '5'); //error 

let a=2;
let b=a++;
console.log(a,b); //a=2 b=3, a=2 b=4 ,a=3 b=4, a=3 b=2,

console.log(0 == '');
console.log(0 === '');

console.log(!!false);
// console.log(!!"")

// Conditional statements
// let age=prompt("Enter your age")
// if-else statement
// if(age>=18){
//     console.log("He/She can eligible for voting")
// }else{
//     console.log("He/She can not  eligible for voting")
// }


// if-else ladder
let stMark=40;
if(stMark>=90){
    console.log("Grade A")
}else if(stMark>=80){
    console.log("Grade B")
}else if(stMark>=60){
    console.log("Grade C")
}else{
    console.log("Fail")
}

// Ternary Operator

let stage=16;
console.log(stage>=18 ? "can vote" :"can't vote")


// check the number is divisible by 5 or not using promt and condition
// let num=prompt("Enter your Number");
// if(num%5==0){
//     console.log(num," number is divisible by 5")
// }else{
//     console.log(num," number is not divisible by 5")
// }

// Loops 
// 1.for loop
// 2.while loop
// 3.do-while loop

for(let i=1;i<=4;i++){
    console.log(i)
}


console.log("THis is while loop")
let i=1;
while(i<=3){
    console.log(i)
    i++;
}

console.log("do while loop")
let n=1;
do {
    console.log(n)
    n++;
} while (n<=5);


// Object
let obj={
    age:30,
    name:"xyz",
    phone:90485,
    email:"xyz@gmail.com"
}

console.log(obj.name)
console.log(obj.age)
console.log(obj["email"])
obj.name="y"
console.log(obj.name)

let arr=[1,2,3,4,5,6];
// console.log(typeof arr)


console.log("for-in loop")
// for-in
for (let key in obj) {
    console.log(obj[key])
}

for (let idx in arr) {
    console.log(arr[idx])
}

console.log("for-of loop")
// for-of
for (const e of arr) {
    console.log(e)
}

// for (const e of obj) {
//     console.log(e)
// }

let str="Qlith Innovation"
console.log("length is :",str.length)

console.log(str[0])

str[0]="D";
console.log(str)

// Interpollation of string
let c=20;
console.log("value is :",(c+1))
console.log(`value is : ${c}+1`);



//for in 

const obj1={
    name:"hdfj",
    age:20

}

for (let key in obj1) {
    console.log(obj1[key])
}

let arr1=[2,3,4,5,6];
for (let idx in arr1) {
    console.log(arr1[idx])
}

console.log("for of loop")
for (const ele of arr1) {
    console.log(ele)
}

