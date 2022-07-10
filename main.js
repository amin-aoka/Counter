let number = document.querySelector("#number");
let dec = document.querySelector(".dec");
let res = document.querySelector(".res");
let inc = document.querySelector(".inc");
let aut = document.querySelector(".aut")
let i=0;
let c=1;
let auto = true;
let myInterval;

//functions
let adder = function (){
    i+=1;
    number.innerText=i;

}
let decreaser = () => {
    i--;
    number.innerText = i;
}

let reseat = ()=> {
    i=0;
    number.innerText=i;
    myInterval = setInterval(adder,2000)

}

let = automation = ()=>{

clearInterval(myInterval)

}

// event listeners
inc.addEventListener("click", adder);
dec.addEventListener("click",decreaser)
res.addEventListener("click", reseat)
aut.addEventListener("click", automation)


if (auto){
    myInterval = setInterval(adder,2000)
}