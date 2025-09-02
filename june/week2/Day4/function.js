
// this is function declaration
function print(){
    console.log("this is my function")
}

// this is function invocation /calling
print()

// expression function
let printQlith=function(){
    console.log("this is my expression function")
}

printQlith()
// console.log(printQlith)

// function with parameters
let add=function(a,b){
    return a+b;
}

let sum=add(10,20);
console.log(sum)
// console.log(add)


let sub=()=>{
    console.log("this is my arrow function")
}
sub()
// console.log(sub)


// higher order function
function hof(a,b,task){
     return task(a,b)
}

let addNum=hof(10,20,(pagal,mental)=>{
    return pagal+mental;
})
console.log(addNum)


let newString=prompt("Enter some string :");

function checkVowel(str){

    let newStr=str.toLowerCase();

    let count=0;
    // using for loop by simple checking
    // for(let e of newStr){

    //     if(e === "a" || e==="e" || e==="i" || e==="o" || e==="u"){
    //         count++;
    //     }
    // }

    // using includes method
    for(let e of newStr){
        if("aeiou".includes(e)){
            count++;
        }
    }
    return count;
}

console.log("No of vowels is :",checkVowel(newString))


let arr=[1,2,3,4,5,6,7,8]

let count=0;
arr.forEach((v,idx,ar)=>{
    if(v%2==0){
        count++
    }
})
console.log(count)

let strArr=["pagal","dasu","bakadi","choro","sabyasachi","biswajit"];
let countStartWithS=0;

strArr.forEach(v=>{
    if(v.startsWith("s")){
        countStartWithS++;
    }
})

console.log( "ans is :",countStartWithS)

// this is map function
let numArr=[1,2,3,4,5];

let modifiedArr=numArr.map((v)=>{
 return v+1;
})
console.log(modifiedArr)

// filter method
let filterData=numArr.filter((v)=>{
    return v%2===0;
})
console.log(filterData)


// this is reduce method
let sumOfNumber=numArr.reduce((accu,curr)=>{
    return accu+curr;
},0)
console.log("sum is :",sumOfNumber)

// let sumNu=0
// for(let e of numArr){
//     sumNu+=e;
// }
// console.log(sumNu)


// ! Qestion 1
let marksOfStudent=[20,30,60,100,90,10,0,17];

let afterFilter=marksOfStudent.filter((e)=>{
 return e>=50
})

console.log(afterFilter)

// ! Question 2
let n=prompt("Enter a number");

let from1ToN=[];

for(let i=1;i<=n;i++){
    from1ToN.push(i);
}

console.log(from1ToN)

let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
  return accu+curr;
})

let multFrom1ToN=from1ToN.reduce((accu,curr)=>{
  return accu*curr;
})

console.log("Summation is :",sumFrom1ToN);
console.log("Multiplication is :",multFrom1ToN)

console.log([]==0)

