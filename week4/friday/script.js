// **************functions****************
/*
// let user_name = prompt('Please tell me your name');
// argument in function
// sayMyName(user_name);
*/

/*
// parameter in declaring function
function sayMyName(my_name){
    alert(my_name);
}
let result = sum(1,2,3,4);
console.log(result);

result = sum(result);
console.log(result)

function sum(num1 = 0,num2 = 0,num3 = 0,...args){
    console.log(args);
    // console.log(arguments);
    return num1+num2+num3;
}
*/

/*
// **************regular function**************** 
function countdown(value){
    if(value>0){
        console.log(value);
        countdown(value - 1);
    }else{
        console.log('Happy new year');
    }
}
countdown(15);
*/

// ***********funciton expression*************
/*
let countdown_expression = function(value){
    if(value>0){
        console.log(value);
        countdown_expression(value - 1);
    }else{
        console.log('Happy new year');
    }
}

countdown_expression(10);
*/

/*
// ************function expresion************ 
var myFunction = function(arg1, arg2){ 
    console.log(arg1 +arg2);
    return arg1 + arg2; 
}
myFunction(2 , 3);
*/

/*
// **********arrow function*************
let countdown_expression = value => {
    if(value>0){
        console.log(value);
        countdown_expression(value - 1);
    }else{
        console.log('Happy new year');
    }
}
countdown_expression(10);

let addUp = (num1 = 0,num2 = 0,num3 = 0,...args) => num1+num2+num3;
console.log(addUp(1,2,3));
*/







