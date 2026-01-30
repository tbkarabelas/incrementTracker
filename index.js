// store count as 0
let totalCount = 0

// gives, us control over html element

let countEl = document.getElementById("count-el");

let saveEl =  document.getElementById("total-el");

// console.log(saveEl);
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

  

   if( totalCount <= 0){
    totalCount = 0;
   }

    countEl.innerText = totalCount;
}

function save(){
    
    previousCount = " " + totalCount + " - ";
   // console.log(previousCount);
   saveEl.innerText += previousCount;

   countEl.innerText = 0;
   totalCount = 0;
}


