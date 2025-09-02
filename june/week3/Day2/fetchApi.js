
console.log("Today fetch Api")

// call back hell 
// function getData(userId, next) {

//     setTimeout(() => {
//         console.log("User Id :", userId)
//         next();
//     }, 3000)

// }

// getData(1, () => {
//     getData(2, () => { getData(3, () => { getData(4, () => getData(5)) }) });
// });



// normal promise Object
// let promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         // res("success")
//         rej("error")
//     },3000)
// })
// console.log(promise)



// Promises 
// function getData(userId) {

//         return new Promise((resolve, reject) =>{
//             setTimeout(() => {
//             console.log("User Id :",userId)
//             resolve("resolve ho geya")
//             // reject("something missing")
//             }, 3000)
//         })
// }

// // how to handle a promise
// ans: then or catch block
// Promise chain

// getData(1).then(()=>{
//     return getData(2).then(()=>{
//         return getData(3).then((res)=>{
//             console.log("result is :",res)
//         })
//     })
// }).catch((err)=>{
//     console.log("Error is :",err)
// })


// async await
// fetch(getreq,option) 

async function getData() {

let response=await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    title: 'title',
    body: 'body',
    userId: 2,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})

// let response=await fetch(`https://jsonplaceholder.typicode.com/posts`,option);
let data=await response.json()
console.log(data)

// data?.forEach(element => {
//     console.log(element.title)
// });

}

// getData()
