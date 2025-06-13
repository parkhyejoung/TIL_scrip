let num = 2;//0,400,800 출력을 위한 변수
const slideContainer = document.querySelector('.slide_conteinar');
slideContainer.style.transition = 'transform 0.3s';

const slideTimer = setInterval(()=>{
    num--;
    if(num<0){num=2}
    slideContainer.style.transform = `translateX(-${400*num}px)`
    console.log(`현재 num:${num},x축값:${400*num}`)
},3000)


/* /* setInterval(numTimer, 2000)
function numTimer(){
    num++;
    console.log(num);
} */
//const numTimer = setInterval(function(){
/*     num++;
    console.log(num); */
//},2000)
/* const numTimer = setInterval(function()=>{
    num++;
    console.log(num);
},2000) */
//이벤트의 다양한 함수 호출방법(콜백,화살표함수,익명함수 순서)
//DOM.addEventListener('event',콜백함수)
//DOM.addEventListener('event',()=>{})
//DOM.addEventListener('event','function(){})


