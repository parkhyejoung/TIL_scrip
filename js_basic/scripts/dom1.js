// DOM EVENT
// 객체 -> 이벤트 ->  함수 순으로
// HTML 태그에서 JS로 동적제어하고 싶은 대상만 변수로 둔다
// 회원만 주문되는 주문하기 버튼 알고리즘
// (비회원인 경우) 주문하기 버튼을 클릭했을때 '회원만 주문할수있습니다' 메세지 출력
// 주문하기 버튼  -> DOM객체변수
// 클릭했을 때 == 이벤트(HTML,Javascripts)
// 회원만 메세지 출력 == 함수
// 이벤트리스너 -> 리스너(Listener)란? 특정이벤트가 발생했을때 실행할 함수를 의미한다.
const buyBtn = document.querySelector('#buyBtn'); //<<id buybtn을 문서에서 찾아서 const buyBtn에 대입
console.log(buyBtn); //변수 확인
const paymsg = document.querySelector('#payBtn');
console.log(paymsg);
const idcheck = document.querySelector('#idBtn');
console.log(idcheck);
//버튼 onclick 이벤트리스너로 호출할 함수 생성
function userOrderMsg(){
    return console.log('회원만 주문가능합니다 로그인해주세요');
}
//결제하기 클릭시 '결제 완료되었습니다' 출력 알고리즘
function paymg(){
    return console.log('결제 완료되었습니다');
}
//아이디 중복확인 클릭 시 '아이디가 중복되지않습니다 사용하셔도 좋습니다' 출력 알고리즘
function idchk(){
    return console.log('아이디가 중복되지않습니다 사용하셔도 좋습니다');
}
//키보드 이벤트
//리뷰입력창에 키보드를 눌렀을때 '50자 이상 입력하세요' 출력 알고리즘
const userReview = document.querySelector('input[name*=review]');
console.log(userReview);
function review50Msg(){
    return console.log('50자 이상 입력하세요');
}
//id 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '아이디는 영어로 시작해야합니다' 출력 알고리즘 
const userId = document.querySelector('input[name*=id]');
console.log(userId);
function enId(){
    return console.log('아이디는 영어로 시작해야합니다');
}
//pw 입력창 객체 준비 후 키보드를 아무키나 입력했을 때 '비밀번호는 특수문자 포함 12글자 이상 입력하세요' 출력 알고리즘
const userPw = document.querySelector('input[name*=pw]');
console.log(userPw);
function usPw(){
    return console.log('비밀번호는 특수문자 포함 12글자 이상 입력하세요');
}
// 기타 이벤트
// focus 특정 요소에 포커스(커서 활성화)됐을 경우
/* userId.style.border = '3px soild green'; //즉시 실행 테스트 */
userId.style.outline = 'none';
function focusGreen(){
    return userId.style.border = '3px solid green';
}
function blurGray(){
    return userId.style.border = '1px solid gray';
}
//쇼핑몰 상품 수량 입력 알고리즘
//기본 수량 1
//사용자가 숫자 입력을 위해서 커서를 두면 배경색 노랑 변경
//커서를 빼면 배경색 흰색
const itemNum = document.querySelector('input[name*=num]'); //111
console.log(itemNum); // 정상확인   //111                          
function focusBgYellow(){         //333
    return itemNum.style.backgroundColor = 'Yellow'; //333
}
function focusBgwhite(){          //333  
    return itemNum.style.backgroundColor = 'white'; //333            
}
//문서가 로딩되었을 때 실행함수
function loadMsg(){                       //333                        
    return alert('문서 로딩 완료')          //333                      
}
console.log('-----------------------이벤트와 콜백함수')   //111
//객&111& (변수)->이 &222& -> 함 &333&
const googleJoin = document.querySelector('.google_join'); // &111&
console.log(googleJoin); //&111&
//자바스크립트에 작성하는 객체 이벤트 문법
//객체.addEventListener('이벤트',콜백함수); 
// ▼ addEventListener 이벤트 작성 시 'on' 없이 이벤트만 작성한다.  <<콜백함수 사용시()XX 
googleJoin.addEventListener('click',googleGo); // &222& 
function googleGo(){  // &333&
    return window.open('https://accounts.google.com','_blank');  // &333&
}     // &333&
const naverJoin = document.querySelector('.naver_join'); //&111&
console.log(naverJoin); //&111&
naverJoin.addEventListener('click',navergo) //&222& 
function navergo(){  //&333&
    return window.open('https://nid.naver.com/nidlogin.login','_blank'); //&333&
} 
const kakaoJoin = document.querySelector('.kakao_join'); //&111&
console.log(kakaoJoin);   //&111&
kakaoJoin. addEventListener('click',kakaogo); //&222& 
function kakaogo(){     //&333&
    return window.open('https://accounts.kakao.com','_blank');  //&333&
}
//현재 페이지 변경 방법
//1.객체
const fileLink = document.querySelector('.file_link'); //<<('.file_link') html에서 가져오는거 앞에 있는 fileLink는 js변수
console.log(fileLink); 
//2.이벤트
fileLink.addEventListener('click',link0520);
//3.함수
//JS에서 상대경로 연결 시 JS파일 기준이 아닌 JS가 연결된 HTML파일이 저장된 위치를 기준으로 상대경로를 작성한다.
function link0520(){
    return window.location.href= 'bom1.html'; 
}
console.log('========================================')
const index = document.querySelector('.index_link');  //111
console.log(index);   //1111
index.addEventListener('click',indexLink);    ///222
function indexLink(){     //333
    return window.location.href= 'index.html';     //333
}
const readme = document.querySelector('.readme_link');  //111
console.log(readme);  //111
readme.addEventListener('click',readmeLink)  // 222
function readmeLink(){    //333
    return window.location.href= '../README.md'; //333
}
/* 상품 수량 증가 알고리즘 */
//1. 수량 초기값 1
//2. + 버튼 클릭 시 수량이 1씩 증가해야 한다
const numInput = document.querySelector('input[name=num]');   //111
const numBtn = document.querySelector('#num_btn');    //111
console.log(numInput); //111
console.log(numBtn); //111
//1. 수량 초기값 1
numInput.value = 1; //초기값이므로 이벤트 없이 바로 작성
//2. + 버튼 클릭 시
numBtn.addEventListener('click',numPlus);   //222
function numPlus(){
    /* return numInput.value = ++numInput.value; 증감 연산자*/
    console.log(typeof numInput.value)                    //333
    return numInput.value = Number(numInput.value)+1;     //333
}
const numMinus=document.querySelector('#num_btn_minus');
console.log(numMinus);
numMinus.addEventListener('click',numM);
function numM(){
    return numInput.value = Number(numInput.value)-1;
}


