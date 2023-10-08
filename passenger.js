
//document.getElementById("count-el").innerText = 5;

const myAge=21;
const humanRatio = 10;
let combination = myAge * humanRatio;
console.log(combination);



let countEl = document.getElementById("count-el");
console.log(countEl);

let count= 0;

function increment(){
    count=count+1;
    countEl.innerText=count;
    console.log(count);
}

function save(){
    console.log(count);

}

function luckyNumber (){
    console.log(42);
}
luckyNumber();

let lap1=34;
let lap2=33;
let lap3=36;

function totalLaps(){
    let totalLaps=lap1 + lap2 +lap3;
    console.log(totalLaps);
}
totalLaps();


let completedLaps=0;

function addOneLap(){
completedLaps=completedLaps+1;
}
addOneLap();
addOneLap();
addOneLap();

let treeNotification= "You have tree notfications";
let greeting= "Hello,";
function treeNotification(){
console.log(greeting + ''+ treeNotification);
}
