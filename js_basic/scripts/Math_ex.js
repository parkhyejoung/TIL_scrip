const xmasDate = document.querySelector('#xmasdate')
const xmasBtn = document.querySelector('#xmas_btn')
const resulfDate = document.querySelector('.date em')
const resulfTime = document.querySelector('.time em')
console.log(xmasDate,xmasBtn,resulfDate,resulfTime);

xmasBtn.addEventListener('click',xmasFunc)
function xmasFunc(){
    const xmas = new Date(xmasDate.value);
    const today = new Date();
    console.log(xmas,today);
    const xmastoday =  today.getTime() - xmas.getTime();
    console.log(xmastoday);
    const dateFlow = Math.floor(xmastoday /(1000*60*60*24));
    const timeFlow = Math.floor(xmastoday /(1000*60*60));
    resulfDate.textContent = dateFlow;
    resulfTime.textContent = timeFlow;
}