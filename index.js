//console.log(`Hello`)
//console.log(`I love pizza!`)
//window.alert(`this is alert!`)
//window.alert(`I like pizza!`)
//window.alert('Hey lets check this!')
//document.getElementById("myH1").textContent="hey Hows You"
//document.getElementById("myP").textContent="I am starting to Code!!!"
//document.getElementById("Submit").onclick ="successful"
//let age =25;
//console.log(age);
//let price =10.99;
//console.log(price);
//let gpa=2.1;
//console.log(gpa);
//console.log(`I am ${age} years old`);
//console.log(`The price is ${price}`);
//console.log(`My gpa is ${gpa}`);

//let firstName = "Pratik";
//let favoriteFood= "pizza";
//console.log(firstName);
//console.log(favoriteFood);
//console.log(`My name is ${firstName}`);
//console.log(`My favorite food is ${favoriteFood}`);
//console.log(typeof firstName);
//let fullName ="Pratik";
//let age = 25;
//let isStudent= false;
//document.getElementById("p1").textContent= `My name is ${fullName}`;
//document.getElementById("p2").textContent=`I am ${age} years old`;
//document.getElementById("p3").textContent=`Enrolled: ${isStudent}`;
//let students = 30;
//students += 1;
//students -=1;
//students *=2;
//students /=2;
//students %=4;
//students **=2;
//let username;
//document.getElementById("mySubmit").onclick = function(){
    //username = document.getElementById("myText").value;
    //document.getElementById("myH1").textContent = `Hey ${username} !`
    
//}

//let age = window.prompt("How old are you?") ;
//age = Number(age);
//age+=1 ;
//console.log(age, typeof age);

//let x = "pizza";
//let y = "pizza";
//let z = "pizza";

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x , typeof x);
//console.log(y , typeof y);
//console.log(z , typeof z);

//let pi = 3.14159;
//let radius;
//let circumference;

//radius = window.prompt("Enter the radius of the circle");
//radius = Number(radius);
//circumference = 2 * pi * radius;
//document.getElementById("mySubmit").onclick=function(){
    //radius = document.getElementById("myText").value;
    //radius = Number(radius);
    //circumference = 2 * pi * radius;
    
    //document.getElementById("myH3").textContent = circumference;
//}

//** Counter Program */
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count =0;
    countLabel.textContent = count;
}










