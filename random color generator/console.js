
let btn = document.querySelector("button");

btn.addEventListener("click",generate);


function generate() {
    let rgb = [0,0,0];

    for(let i=0;i<3;i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }
    
    let ele = document.querySelectorAll(".clr");
    
        ele[0].innerText = `rgb(${rgb[0]} , ${rgb[1]}, ${rgb[2]})`;
        ele[0].style.color = `rgb( ${rgb[0]} , ${rgb[1]}, ${rgb[2]})`;
        ele[1].style.backgroundColor = `rgb( ${rgb[0]} , ${rgb[1]}, ${rgb[2]})`;

    
}


