
let countEl = document.getElementById("count-el");
console.log("count-el");
let saveEl= document.getElementById("save-el");
console.log("save-el");
let count= 0;

function increment(){
    count=count+1;
    countEl.innerText=count;
}

function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    //line 4 variable must match the above variable!
    //everytime it restarts back from 0 and counts from there all over again!
    console.log(count);


    //everytime the save button is clicked the number is reset to 0

}








