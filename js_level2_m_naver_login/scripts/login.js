//main,lang_group 기준
//초기설정 : 한국어~중국어 옵션 숨기기
//#lang_selet 클릭 시 .lang_open 보이기
//.lang_open이 보이는 상태라면 #lang_select 클릭 시 .lang_open 숨기기
//변수생성 -> 이벤트 제작 -> 이벤트 만족 시 실행함수(중간중간 콘솔 자주체크)
const langOpen = document.querySelector('.lang_open'); 
const langSelect = document.querySelector('#lang_select');
console.log(langOpen,langSelect);
langOpen.style.display = 'none';
//참(보이기) ,거짓(숨기기) 상태
let openif = false; //초기 거짓(숨겨진)상태
langSelect.addEventListener('click',()=>{
    //langOpen 보이는 상태면 숨기기
    if(openif == false){
        langOpen.style.display = 'flex';
        openif = true; //상태값 변경
    }else if(openif == true){
        langOpen.style.display = 'none';
        openif = false; //langOpen 숨겨진 상태면 숨기기
    }
})
//네이버 로그인 에러 메세지 알고리즘
//조건 1 ) 아무것도 입력 안함 -> 결과 ) 아이디 또는 전화번호를 입력해 주세요.
//조건 2 ) 아이디 입력 안함 -> 결과 ) 아이디 입력해 주세요.
//조건 3 ) 비밀 번호 입력 안함 -> 결과 ) 비밀번호를 입력해 주세요.
//조건 4 ) 로그인 반복 실패 시 ->  결과 ) 영수증 퀴즈와 이미지 입력해야 로그인 가능
//조건 5 ) 로그인 실패 시 ->  결과 ) 아이디 비밀번호를 재 확인해주세요
//조건 6 ) 로그인 정상 진행 되지않을시 로그인페이지 -> 결과 ) 다시 로그인해 주세요.

//네이버 회원정보 저장 DB
const naverUserDB = [{
    id:'aaa',
    pw:'a1234',
},{
    id:'bbb',
    pw:'b1234',
}]
console.log(naverUserDB);

//조건 1 ) 아무것도 입력 안함 -> 결과 ) 아이디 또는 전화번호를 입력해 주세요.
const userId = document.querySelector('input[name=user_id]')
const userPw = document.querySelector('input[name=user_pw]')
const errorMsg = document.querySelector('.error_msg')
const loginBtn = document.querySelector('#login_btn')
console.log(userId,userPw,errorMsg,loginBtn);

loginBtn.addEventListener('click',()=>{
    if(userId.value == '' && userPw.value == ''){
        errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요.'
        //조건 1 아이디와 비밀번호를 모두 입력안할 시(참) 실행결과
    }else if(userPw.value == ''){
        errorMsg.textContent = '비밀번호를 입력해주세요'
        //조건2) 조건1이 거짓이고 조건2의 비밀번호를 입력안했는가(참)
    }else if(userId.value == ''){
        errorMsg.textContent = '아이디를 입력해주세요'
    }else if(userId.value == naverUserDB[0].id && userPw.value == naverUserDB[0].pw){
        //아이디와 비밀번호가 DB서버의 0인덱스값과 모두 일치할때 네이버 메인페이지로 이동
        window.location.href = 'https://www.naver.com/'
    }else{
     //위 모든 조건이 거짓일때
    errorMsg.textContent = '아이디(로그인 전화번호,로그인 전용아이디) 또는 비밀번호가 잘못되었습니다. 아이디와 비밀번호를 정확히 입력해주세요';
    }
    //삼항조건 활용 조건1
    //조건식 ? 조건식참결과 : 조건식거짓결과
    //조건결과대입변수 = 조건식? 조건식참결과 : 조건식거짓결과
    //errorMsg.textContent = userId.value == '' && userPw.value == '' ? '아이디 또는 전화번호를 입력해 주세요.' : '';
})


