// Array
// 
// arr[1]=5;
// console.log(arr[1]);

// let arr = [[6,14],[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];


// temp.push(arr[0][0]*arr[1][0]);
// temp.push(arr[0][1]*arr[1][1]);
// temp.push(arr[0][2]*arr[1][2]);
// temp.push(arr[0][3]*arr[1][3]);
// temp.push(arr[0][4]*arr[1][4]);
// console.log(temp);
// arr.push(temp);
// console.log(arr);
// console.log(arr);
// console.log(arr[0][5]);
// let arr2 = new Array(1, 2, 3, 4, 5);
// arr.pop();
// arr.push(6);
// // console.log(arr.length);

// object

// let obj={
//     name: 'John',
//     age: 30,
//     isMarried: false
// }

// obj.name = 'Suman';

// console.log(obj.name);

// const a = 32;
// console.log(typeof a);
// const b= String(a);
// console.log(typeof b);

// const fName= 'Suman';
// const lName= 'Kumar';
// const age = 30;
// const isMarried = false;

// // console.log('My name is ));
// // console.log(`My name is ${fName}, I am ${age} years old and I am ${isMarried ? 'married' : 'not married'}`);

// true ? console.log('Yes') : console.log('No');
// if(age==30){
//     console.log('Age is 30');}
// else{

//     console.log('Age is not 30');
// }


// loop


// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let j=0;
// do{
//     console.log(j);
//     j++;
// }
// while(j<10);



// const district= ["palpa", "syangja", "kaski", "tanahu", "gork"]

// const province=["Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpaschim"]

// const village=["Dhakal", "Poudel", "Ghimire", "Pandey", "Karki"]

// const newArr= district.concat(province);

// const arr=[...district, ...province, ...village];

// console.log(arr);




///function 


// const sum = (a,b) => {
//     return a+b;
// };

// function sum(a,b){
//    return a+b;
// } 

// const result=sum(arr);

// console.log(result);

//Break and continue

// const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // const temp=[];
// console.log(arr.length)
// for(let i=arr.length-1; i>0 ;i--){
//     let x=arr[i];
  
    
// }

// console.log(this)

// const obj={
//     name: 'John',
//     age: 30,
//     isMarried: false,
    

// }


// for(let y in obj){
//     console.log(y);
//     // console.log(obj[key]);
// }

// const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let s in arr){
//     console.log(arr[s]);
// }

// let btn=document.getElementById('btn')
// console.log(btn);

// btn.addEventListener('mouseenter', function(){
//     console.log('Focus');
// })

// const para=document.querySelector('#para');
// const inp=prompt('Enter your name');
// // para.innerText='kjdihgfiufhbuih';

// console.log(inp);

// const conataines=[...con];
// const con1=Array.from(con);
// const first_ele=conataines[0];


// console.log(con1);




// setTimeout(()=>{    
//     console.log('Hello');
// }, 3000);

// setInterval(()=>{    
//     console.log('Interval Hello');
// }, 1000);

// console.log('This is Second Hello');

// const form= document.querySelector('#form');
// const name= document.querySelector('#name');
// const email= document.querySelector('#email'); 

// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e)
//     console.log(name.value, email.value);
//   }


// }
// form.addEventListener('submit', handleSubmit);
// console.log(Math.random()*16);



// const square = (n) => {
//     return n*n;
// }

// const cube = (n) => {    
//     return n*n*n;
// }



// const sumOfSomeThing = (a, b, fn) => {
    
//     let sq1=fn(a);
//     let sq2=fn(b);
//     return sq1+sq2;
// }

// const res = sumOfSomeThing(2, 3, square); 
// const res1=sumOfSomeThing(2,3,cube)

// console.log(res1);



// const obe ={
//     courseName: 'MERN',
//     duration: '6 months',   
//     fee: "free"
// }


// const {courseName} = obe;

// console.log(co);


// const arr = ["palpa", "syangja", "kaski", "tanahu", "gork"]

// const [ar1, b] = arr;

// console.log(b);


import http from 'http';
import os from 'os';

console.log(os.type());

const server = http.createServer((req,res)=>{
    
    if(req.url==="/users"){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({name:'sathi',age:23}));
        res.end();
    }
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h1>Hello Sathi haru </h1>');
    res.end();

  
})


server.listen(8000,()=>{
    console.log('Server is running on port 8000');
})


