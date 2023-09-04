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

const check = ()=>{
    return console.log("Checking wedding invitation 👨‍💻..... A/c to Person😀 ")
}

const invit = (name="buddy",hallNo=5)=>{
    if(name=="mandi"){
                console.log(`Oh you bledy ${name}👵 get out  your are not invited 😂`);     
            }
            else if(name=="chethu"){
                console.log(`Oh sorry ${name}☹️  your are not invited`);     
            }
            else{
        
                console.log(`Welcome! ${name}🤗 you are invited at hall number ${hallNo}🥰`);  //invoking the function
            }
    return 
}
setTimeout(check,1000)
setTimeout(invit,3000,"Manoja",9)
setTimeout(invit,5000,"chandra",18)
setTimeout(invit,8000,"mandi",9)
setTimeout(invit,10000,"Hema",14)
setTimeout(invit,12000,"chethu",6)
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

