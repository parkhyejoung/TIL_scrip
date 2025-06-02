//정규 표현식 RegEx 
//필터 시작과 끝 표시//
//필터.test('검사문자')
//상황 1. 쇼핑몰 리뷰 작성 시 리뷰 내용에 '별로'라는 단어 입력금지
const userText = '구매하지마세요 별로에요'
const regexFilter = /별로/
let result = regexFilter.test(userText)
console.log(result);

//상황2.쇼핑몰 리뷰 작성 시 리뷰 내용에 '별로','최악' 단어금지
//필터예시 (별로|최악)
const review = '별로구요 최악이에요'
const reviewFilter = /별로|최악/
result = reviewFilter.test(review)
console.log(result);
console.log('----------------------------')
//회원가입 알고리즘
//아이디에 영어만 입력가능한(정규표현식) 조건 생성
const userId = document.querySelector('input[name*=id]');
const userIdErr = document.querySelector('.error_id');
console.log(userId, userIdErr);
userId.addEventListener('input',idchk)
//function inputTest(){return console.log('입력확인')}
function idchk(){
    if(!/^[a-zA-Z]+$/.test(userId.value)){
        return userIdErr.textContent = '영어만 입력 가능합니다';
    }else{
        return userIdErr.textContent ='';
    }
}

//숫자만 입력가능한 정규표현식 활용 사용자 나이 받기
const userAge = document.querySelector('input[name*=age]');
const userAgeErr = document.querySelector('.error_age');
console.log(userAge,userAgeErr);
userAge.addEventListener('input',agechk)
function agechk(){
    if(!/^\d+$/.test(userAge.value)){
        return userAgeErr.textContent = '숫자만 입력 가능합니다';
    }else{
        return userAgeErr.textContent = '';
    }
}
//알파벳과 숫자 조합만 가능한 비밀번호 칸 정규표현식 만들기
const userPw = document.querySelector('input[name*=pw]');
const userPwErr = document.querySelector('.error_pw');
console.log(userPw,userPwErr);
userPw.addEventListener('input',pwchk)
function pwchk(){
    if(!/^[a-zA-Z0-9]+$/.test(userPw.value)){
        return userPwErr.textContent = '알파벳,숫자 조합만 가능합니다';
    }else{
        return userPwErr.textContent = '';
    }
}
//리뷰 글자 수 제한 알고리즘
//리뷰 작성 시 입력 글자 수 실시간 출력 .current
//현재 포맷(제목,내용,리뷰 등)에 맞는 최대글자수 초기 표시 .max
//리뷰 작성 시 최대글자수를 오버하면 출력 메세지 출력 
//변수
const userReview = document.querySelector('textarea[name=review]');
const reviewCurrentNum = document.querySelector('.current');
const reviewMax = document.querySelector('.max');
const reviewErr = document.querySelector('.error_msg');
const reviewMaxNum = 100; //최대 입력 수 제한
console.log(userReview,reviewCurrentNum,reviewMax,reviewErr);
reviewMax.textContent = reviewMaxNum;
//이벤트 
userReview.addEventListener('input',reviewFunc)
function reviewFunc(){
    //글자 수 속성 length
    //reviewCurrentNum.textContent = userReview.value.length;
    if(/^.{0,100}$/.test(userReview.value)){  
        //0에서 100자 입력 사이일때(참 결과)
        reviewCurrentNum.textContent = userReview.value.length;
    }else{
         //100자보다 클때(거짓결과)
        reviewErr.textContent = '100자까지만 입력할수있습니다'
        //입력비활성화
        //userReview.disabled = true;
    } 
}