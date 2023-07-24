const advice=document.getElementById("advice");
const number=document.getElementById("number");
const btn=document.querySelector(".btn");

function consulta() {
    fetch("https://api.adviceslip.com/advice")
    .then(res=>res.json())
    .then(res=>{
        console.log(res.slip);
        number.textContent=res.slip.id;
        advice.textContent=res.slip.advice;
    })
}
document.addEventListener("DOMContentLoaded",()=>consulta());
btn.addEventListener("click",e=>consulta());
