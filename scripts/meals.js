document.getElementById("1").style.height = '0px';
document.getElementById("2").style.height = '0px';
document.getElementById("3").style.height = '0px';
let x = 1;

const breakfastt = ()=>{
    const bf = document.getElementById("1")
    const i = document.getElementById("bflogo")
    if(x==0){
        i.classList.remove("fa-circle-arrow-down");
        i.classList.add("fa-circle-arrow-up");
        bf.style.height="0";
        x=1;
    }
    else if(x==1) {
        i.classList.remove("fa-circle-arrow-up");
        i.classList.add("fa-circle-arrow-down");
        bf.style.height = '270px';
        x=0;
    }
};

let x2 = 1;
const lunchh = ()=>{
    const lc = document.getElementById("2");
    const i = document.getElementById("lulogo");
    if(x2==0){
        i.classList.remove("fa-circle-arrow-down");
        i.classList.add("fa-circle-arrow-up");
        lc.style.height = '0';
        x2=1;
}
    else if(x2==1) {
    i.classList.remove("fa-circle-arrow-up");
    i.classList.add("fa-circle-arrow-down");
    lc.style.height = '270px';
    x2=0;
}
};

let x3 = 1;
const dinnerr = ()=>{
    const dn = document.getElementById("3");
    const i = document.getElementById("dilogo");
    if(x3==0){
    i.classList.remove("fa-circle-arrow-down");
    i.classList.add("fa-circle-arrow-up");
    dn.style.height = '0';
    x3=1;
}
    else if(x3==1) {
    i.classList.remove("fa-circle-arrow-up");
    i.classList.add("fa-circle-arrow-down");
    dn.style.height = '270px';
    x3=0;
}
};