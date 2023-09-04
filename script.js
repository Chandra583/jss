// //real ex of function
// // let invit = function(name,hallNo=5){
// //     if(name=="mandi"){
// //         console.log(`oh Sorry ${name} your are not invited`);     
// //     }
// //     else if(name=="chethu"){
// //         console.log(`oh Sorry ${name} your are not invited`);     
// //     }
// //     else{

// //         console.log(`Welcome! ${name} you are invited at hall number ${hallNo}`);  //invoking the function
// //     }
// // }
// // console.log('---------------------------------')
// // invit("mandi",3)
// // invit("hema",8)
// // invit("manoja",32)
// // invit("chethu")


// //Arrow function

// const check = ()=>{
//     return console.log("Checking wedding invitation 👨‍💻..... A/c to Person😀 ")
// }

// const invit = (name="buddy",hallNo=5)=>{
//     if(name=="mandi"){
//                 console.log(`Oh you bledy ${name}👵 get out  your are not invited 😂`);     
//             }
//             else if(name=="chethu"){
//                 console.log(`Oh sorry ${name}☹️  your are not invited`);     
//             }
//             else{
        
//                 console.log(`Welcome! ${name}🤗 you are invited at hall number ${hallNo}🥰`);  //invoking the function
//             }
//     return 
// }
// setTimeout(check,1000)
// setTimeout(invit,3000,"Manoja",9)
// setTimeout(invit,5000,"chandra",18)
// setTimeout(invit,8000,"mandi",9)
// setTimeout(invit,10000,"Hema",14)
// setTimeout(invit,12000,"chethu",6)
// setInterval(invit,2000,"hema",9)

 

// //
// let compliment = (msg)=>{
//     return (name)=>{
//         console.log(`${msg} ${name}`);

//     }
// };
// // compliment("Good Morning")( "chandra");
// let comp = compliment("your too bad person")
// comp ("mandi")
// // console.log(comp)


//Set timeout and settime inetrval
//syntax
//setTimeOut(funtion,dela)


// setTimeout( function greet(name){
//     console.log (`${name},Hello`) ;
//     greet("chandra")
// },3000 )
   
// function greet (name,time) {
//     console.log (`welcome! ${name} to this course at ${time}`);

// }
 
// setTimeout(greet,3000,"Vysh","morning")


//HOISTING

//INTRODUCTION TO OBJECTS

// let car ={
//     color:"black",
//     model:"2020",
//     company:"Honda"
// }
//     console.log(car)


//ACCESSING the javascript object
// console.log( car.color)
// console.log( car.model)

// let ppname = "color"

// console.log(car.ppname)
// // console.log(car.color)

// car["color"]="red"
// console.log(car.color)

////////////////////////////////////////

//FUNCTION VS METHOD
//method meanings that if function was written iniside object is called method 

//   let person = {
//     ageCalculate : function (birthyear=2000) {
//         let age =2023-birthyear;
//         return age;
        
//     }

//   }
//   console.log(`age is: ${person.ageCalculate()}`)

///////////////////////////////////////////////////////////

//Example
// let person ={
//     fname:"Chandra",
//     lname:"Shekar",
//     city:"Mysore",
//     Education:"bsc",
//     Birthyear:2000,
//     getSummary:function(){
//     return console.log(this) 
//         // return console.log( `${this.fname} ${this.lname}, born in ${this.Birthyear}. He lived in ${this.city},his education ${this.Education}`)
//     }
// }
// person.getSummary()

///////////////////////////////////////////////////////////////////////

//FOR EACH METHOD

// let item =["Biriyani","golgappe","poora","saas"];

// //using for each 
// item.forEach(function(ele){
//     console.log(`${ele}`);
// })

// //Object inside array

// let blockList= [{name:"mandi",reason:"dirty_girl"},{name:"manoja",reason:"abusive content"}]

// // for (let i=0;i<blockList.length;i++){
// //     console.log(blockList[i])
// // }
// console.log("*************************")
// blockList.forEach(function(arr){
//     console.log(`the blocked usernames ${arr.name} and the reason is ${arr.reason}`)
   
// })

//////////////////////////////////////////////////////////////////////////////////
// "use strict"
// let redBus = {
//     Bus:"Airvatha",
//     busId:"ab522",
//     bookings:[],
//     book:function(BusNum,name,contactNo){
//         console.log(`${name} Booked bus on ${this.Bus} with busname  of ${BusNum} and ${name} contactNumber is ${contactNo}`)
//         this.bookings.push({bus:`${this.Bus}`,name:name,BusNumber:`${BusNum}`, contactNumber:`${contactNo}`})
//     }

// }
// redBus.book(1,'chandu',6362323415)
// redBus.book("KA43E5521",'shekar',8296725179)


// let greenBus={
//     Bus:"GreenBus",
//     busId:"ab522",
//     bookings:[],
// }

// let book = redBus.book;

// book.call(greenBus,"KA43E2211","simba",58896996632)
// console.log(greenBus.bookings);
// book.call(redBus,"KA43E4511","sandeep",58896996632)
// console.log(redBus);
// //////bind method use to bind object function when function declare outside the object
// function welcome(){
//     console.log(`welcome ${this.fname} ${this.lname} on this course`)

// }

// let user={
//     fname:"chandra",
//     lname:"shekar"
// }
 
// let greet = welcome.bind(user)
// greet()

////////////////////////////////////////////////////

////call by value and call by reffrence

let arr =[1,2,3,6,4,5]

// arr.forEach(function(ele){
//     console.log(ele)
// })

let getRef = arr;

console.log("original array", arr)
console.log("getref array", getRef)
// console.log(`getref array ${getRef}`)


