// store count as 0
let totalCount = 0

// gives, us control over html element

let countEl = document.getElementById("count-el");

// console.log(countEl);

// listen for click, increment by 1

// change cont-el, to go up with count

function increase(){
    
   totalCount++;

   countEl.innerText = totalCount;
   

   //console.log(totalCount);
}

function decrease() {

    totalCount--;

    countEl.innerText = totalCount;

    if (totalCount <=0){
        countEl.innerText = 0;
    } 
}

function save(){

    console.log(totalCount);
}
