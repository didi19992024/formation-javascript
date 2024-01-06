// let (peut reafectée) et const  executent dans le bloc { } et var fonction

function example(){
var x=15;
if(true){
var x=10;
console.log("la valeur de x est : "+x);
}
console.log(x);
}
example()

function example2(){
let y=200;
if(true){
let y=250;
console.log("la valeur de x est : "+y);
}
console.log("valeur de y"+y);
}

example2();

function constante(){
const z=5;
if(true){
console.log(z);
}
console.log(z);
}
constante()