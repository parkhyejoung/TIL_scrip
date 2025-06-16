//window.scrollTo(x,y) 문서 스크롤 이동하는 내장함수(절대좌표)
const btn1 = document.querySelector('#btn1');
console.log(btn1);

btn1.addEventListener('click',()=>{
    window.scrollTo(0,800)//숫자는 자동으로 px반환된다.
    //추가 속성이나 메서드 연결 시에는 x y 를 {객체}문법으로 작성한다.
    window.scrollTo({left:0, top:600, behavior:'smooth'})
})
//behavior:'smooth'
//위 동작은 CSS의 body , html {scrool-behavior:'smooth';} 기능동일

const top1 = document.querySelector('#top_btn');
console.log(top1);
top1.addEventListener('click',()=>{
    window.scrollTo({left:0, top:0, behavior:'smooth'})
})

//특정 위치로 바로가기 , 위치속성 offsetTop 활용방법
const cafeBtn = document.querySelector('#cafe_btn');
const blogBtn = document.querySelector('#blog_btn');
const newsBtn = document.querySelector('#news_btn');
const webtoonBtn = document.querySelector('#webtoon_btn');
const sections = document.querySelectorAll('main section'); //4
const navBtn = document.querySelectorAll('.nav button'); 
console.log(cafeBtn,sections,navBtn);

//forEach 활용 navBtn, sections 묶기
//forEach의 시작은 이벤트 DOM 대상 권장
navBtn.forEach((obj,ind)=>{
    //obj 클릭이벤트 생성
    obj.addEventListener('click',()=>{
    //클릭이벤트 내애서 window.scrollTo 동일 인덱스의 sections top 위치이동
        window.scrollTo({
            left:0, 
            top:sections[ind].offsetTop,
            behavior:'smooth',
        })
    })
})
/* blogBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[0].offsetTop)
})
cafeBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[1].offsetTop)  <<.offset 방향 하면 좌표값 알수있음
})
newsBtn.addEventListener('click',()=>{
    window.scrollTo(0, sections[2].offsetTop)
})
webtoonBtn.addEventListener('click',()=>{
    window.scrollTo(0,sections[3].offsetTop)
})
 */

//스크롤 상대적 이동 DOM.scrollBy 
//이전 , 다음 버튼 클릭 시 웹툰 width 만큼 가로스크롤(윈도우x , toon_wrap 0) 이용하기
const toonWrap = document.querySelector('.toon_wrap');
const toonNext = document.querySelector('.toon_wrap_all .next');
const toonPrev = document.querySelector('.toon_wrap_all .prev');
console.log(toonWrap,toonNext,toonPrev);
toonNext.addEventListener('click',()=>{
    toonWrap.scrollBy(toonWrap.children[0].children[0].offsetWidth, 0)
})
toonPrev.addEventListener('click',()=>{
    toonWrap.scrollBy(-toonWrap.children[0].children[1].offsetWidth, 0)
})