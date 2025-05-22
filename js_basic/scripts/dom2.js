//5/22 DOM 이벤트와 함수
//함수와 매개변수 , 익명함수 , 화살표 함수
//functionn 함수명(매개변수,매개변수){실행}
//const 변수명 = function(매개변수){실행}
//const 변수명 = (매개변수) => {실행}
const bg = document.querySelector('#bg');  //1 변수만들기 (HTML과 연관있게 이름 연결)
const bg1Btn = document.querySelector('#bg1_btn');  
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg,bg1Btn,bg2Btn);                   ///2 콘솔로 확인하기  <여기서부턴 만든 변수명만 사용!!
bg.style.height = '1000vh';        ///2-1 입력하고 싶은 스타일 입력 (1) (''안에 작성 잊지말기)
bg.style.backgroundColor = 'yellow';  ///2-1 입력하고 싶은 스타일 입력 (2)
//버튼에 마우스 올렸을때 배경색 변경제어(aqua) 알고리즘
//이벤트와 함수 생성 후 생성한 함수를 이벤트 내 콜백함수로 불러오기
bg1Btn.addEventListener('mouseover',bgchangein);   ///3 이벤트 만들기 (전자 이벤트 행동 , 후자 콜백)
bg1Btn.addEventListener('mouseout',bgchangeout);
bg1Btn.addEventListener('click',bgchangego);
/* bg2Btn.addEventListener('mouseover',bgchange('coral')); */
//(위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능하다.
bg2Btn.addEventListener('mouseover',function(){
    bgchange('coral');  // 익명함수 내 매개변수가 있는 함수 호출  ((함수 안에 함수))
})
bg2Btn.addEventListener('mouseout',()=> bgchange('brown'))  //익숙해지면 매개변수 불러오기 간편한 방법 ((함수 안에 함수))
//(위) 화살표 함수 내 매개변수가 있는 함수 호출(한줄이면 중괄호 생략)
function bgchange(color){    ///매개변수이름일뿐 찐 컬러 x
    return bg.style.backgroundColor = color;    //여기 입력하는건 문자가 아닌 변수라서 '' x
}
function bgchangein(){                          ///4 함수 생성 후 불러오기
    return bg.style.backgroundColor = 'aqua';   ///4-1 내가 뭘로 바꾸고싶은지 입력하기 ((그럼 완성!))
}
function bgchangeout(){
    return bg.style.backgroundColor = 'yellow';
}
function bgchangego(){
    return bg.style.backgroundColor = 'pink'; 
}
