

let count=null;
let button = document.querySelector('.button');
let container = document.querySelector('.container');
console.log(container);
let popup=()=>{
    
    let count= prompt("How many div You want to display:");
    // handleButtonClick(count);
    if(count==null){
        alert("Please enter a Valid number");

    }
    else if(count>=105){
        alert("Please enter Enter below 100 number");
    }else
    createDivs(count);
    
}



function createDivs(count){
    // let container = document.querySelector('.container');
    container.innerHTML='';
    
    
    for(let i = 0; i < count*count; i++){
    let div=document.createElement('div');
    container.appendChild(div);
    div.className="grid1";
    }
    container.style.border="3px solid black";
painting();
}
let painting = () => {
    const divs = document.querySelectorAll('.grid1');
    divs.forEach((b) => {
        b.addEventListener("mouseover", (e) => {
            b.style.backgroundColor = `#${(Math.floor(Math.random()*16777215)).toString(16)}`; // Change the background color to blue on mouseover
        });
    });
}

painting();